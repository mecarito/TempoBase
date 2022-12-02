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
            const images = album.images;
            this.album = album;
            this.albumTracks = album.tracks.items.map((track) => {
              return { ...track, images };
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
  }

  ngOnDestroy(): void {
    this.albumSub.unsubscribe();
    this.artistAlbumSub.unsubscribe();
    this.artistDetials.unsubscribe();
    this.albumIdSub.unsubscribe();
    this.artistIdSub.unsubscribe();
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
          images: track.images,
          previewUrl: track.preview_url,
          trackName: track.name,
          artistName: track.artists[0].name,
        })
      );
    } else {
      alert(`Song ${track.name} has no preview url hence can't be played`);
    }
  }
}
