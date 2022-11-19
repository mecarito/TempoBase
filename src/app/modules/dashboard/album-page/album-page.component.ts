import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Album, Track } from 'app-types';
import { Subscription } from 'rxjs';
import { AlbumService } from '../../shared/services/album.service';
import { saveAlbumId } from '../../shared/store/actions/album';
import { selectAlbumId } from '../../shared/store/selectors/selectors';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
})
export class AlbumPageComponent implements OnInit, OnDestroy {
  albumSub!: Subscription;
  album!: Album;
  albumTracks: Track[] = [];
  albumId!: string | null;

  constructor(
    private albumService: AlbumService,
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
        },
        error: () => this.router.navigate(['']),
      });
    });
  }

  ngOnDestroy(): void {
    this.albumSub.unsubscribe();
  }

  navigateToArtistPage(id: string) {
    this.router.navigate(['album', id]);
    this.store.dispatch(saveAlbumId({ id }));
    this.scrollTo.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
