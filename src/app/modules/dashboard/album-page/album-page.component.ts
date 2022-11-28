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
import { saveAlbumId } from '../../shared/store/actions/album';
import { saveArtistId } from '../../shared/store/actions/artist';
import {
  selectAlbumId,
  selectArtistId,
} from '../../shared/store/selectors/selectors';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
})
export class AlbumPageComponent implements OnInit, OnDestroy {
  albumSub!: Subscription;
  artistAlbumSub!: Subscription;
  artistDetials!: Subscription;
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
    this.store.select(selectAlbumId as any).subscribe((id: any) => {
      if (id) {
        this.albumId = id;
      } else {
        this.albumId = this.route.snapshot.paramMap.get('id');
      }

      this.albumSub = this.albumService.getAlbum(this.albumId).subscribe({
        next: (album) => {
          this.album = album;
          this.albumTracks = album.tracks.items;
          this.store.dispatch(saveArtistId({ id: album.artists[0].id }));
        },
        error: () => this.router.navigate(['']),
      });
    });

    this.store.select(selectArtistId as any).subscribe((id: any) => {
      if (id) {
        this.artistDetials = this.artistService.getArtistDetails(id).subscribe({
          next: (res) => (this.artist = res),
          error: () => this.router.navigate(['']),
        });

        this.artistAlbumSub = this.artistService.getArtistAlbums(id).subscribe({
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
  }

  navigateToAlbumPage(id: string) {
    this.router.navigate(['album', id]);
    this.store.dispatch(saveAlbumId({ id }));
    this.scrollTo.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
