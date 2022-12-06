import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Album, Artist, Track } from 'app-types';
import { Subscription } from 'rxjs';
import { AlbumService } from '../../shared/services/album.service';
import { ArtistService } from '../../shared/services/artist.service';
import {
  selectAlbumId,
  selectArtistId,
  saveAlbumId,
  saveArtistId,
  saveTrack,
  addToFavorite,
  removeFromFavorite,
  selectFavoriteTracks,
} from 'store';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
})
export class AlbumPageComponent implements OnInit, OnDestroy {
  albumSub!: Subscription;
  artistAlbumSub!: Subscription;
  artistDetials!: Subscription;
  albumIdSub!: Subscription;
  artistIdSub!: Subscription;
  favoritesSub!: Subscription;

  favoriteTracks: Track[] = [];
  album!: Album;
  artistAlbums: Album[] = [];
  albumTracks: Track[] = [];
  albumId!: string | null;
  artist!: Artist;

  constructor(
    private albumService: AlbumService,
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  @ViewChild('scrollTo') scrollTo!: ElementRef;

  ngOnInit(): void {
    this.albumIdSub = this.store
      .select(selectAlbumId as any)
      .subscribe((id: any) => {
        if (id) {
          this.albumId = id;
        } else {
          this.albumId = this.route.snapshot.paramMap.get('id');
        }

        this.albumSub = this.albumService.getAlbum(this.albumId).subscribe({
          next: (album) => {
            const albumDetails = {
              name: album.name,
              images: album.images,
            };
            this.album = album;
            this.albumTracks = album.tracks.items.map((track) => {
              return { ...track, album: albumDetails };
            });
            this.store.dispatch(saveArtistId({ id: album.artists[0].id }));
          },
          error: () => this.router.navigate(['']),
        });
      });

    this.artistIdSub = this.store
      .select(selectArtistId as any)
      .subscribe((id: any) => {
        if (id) {
          this.artistDetials = this.artistService
            .getArtistDetails(id)
            .subscribe({
              next: (res) => (this.artist = res),
              error: () => this.router.navigate(['']),
            });

          this.artistAlbumSub = this.artistService
            .getArtistAlbums(id)
            .subscribe({
              next: (res) => {
                // filter duplicate albums
                let albumNames: string[] = [];
                let uniqueAlbums: Album[] = [];
                res.items.forEach((album) => {
                  if (!albumNames.includes(album.name)) {
                    albumNames.push(album.name);
                    uniqueAlbums.push(album);
                  }
                });

                this.artistAlbums = uniqueAlbums.filter(
                  (item) => item.images.length !== 0
                );
              },
              error: () => this.router.navigate(['']),
            });
        }
      });

    this.favoritesSub = this.store
      .select(selectFavoriteTracks as any)
      .subscribe((tracks: any) => {
        this.favoriteTracks = tracks;
      });
  }

  ngOnDestroy(): void {
    this.albumSub.unsubscribe();
    this.artistAlbumSub.unsubscribe();
    this.artistDetials.unsubscribe();
    this.albumIdSub.unsubscribe();
    this.artistIdSub.unsubscribe();
    this.favoritesSub.unsubscribe();
  }

  navigateToAlbumPage(id: string) {
    this.router.navigate(['album', id]);
    this.store.dispatch(saveAlbumId({ id }));
    this.scrollTo.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  addToPlayer(track: Track) {
    if (track.preview_url) {
      this.store.dispatch(
        saveTrack({
          images: track.album.images,
          previewUrl: track.preview_url,
          trackName: track.name,
          artistName: track.artists[0].name,
        })
      );
    } else {
      alert(`Song ${track.name} has no preview url hence can't be played`);
    }
  }

  addToFavorite(track: Track) {
    this.store.dispatch(addToFavorite({ track: track }));
  }

  removeFromFavorite(track: Track) {
    this.store.dispatch(removeFromFavorite({ track: track }));
  }

  isInFavorites(searchTrack: Track) {
    const available = this.favoriteTracks.find(
      (track) => track.id === searchTrack.id
    );
    if (available) {
      return true;
    }
    return false;
  }
}
