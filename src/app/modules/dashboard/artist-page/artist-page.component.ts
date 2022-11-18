import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Album, Artist, Track } from 'app-types';
import { Subscription } from 'rxjs';
import { ArtistService } from '../../shared/services/artist.service';
import { saveArtistId } from '../../shared/store/actions/artist';
import { selectArtistId } from '../../shared/store/selectors/selectors';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss'],
})
export class ArtistPageComponent implements OnInit, OnDestroy {
  detailsSub!: Subscription;
  albumSub!: Subscription;
  relatedArtistSub!: Subscription;
  topTracksSub!: Subscription;

  artist!: Artist;
  albums: Album[] = [];
  topTracks: Track[] = [];
  relatedArtists: Artist[] = [];
  artistId!: string | null;

  @ViewChild('scrollTo') scrollTo!: ElementRef;

  constructor(
    private artistService: ArtistService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.select(selectArtistId as any).subscribe((id: any) => {
      if (id) {
        this.artistId = id;
      } else {
        this.artistId = this.route.snapshot.paramMap.get('id');
      }
      this.detailsSub = this.artistService
        .getArtistDetails(this.artistId)
        .subscribe({
          next: (res) => (this.artist = res),
          error: () => this.router.navigate(['']),
        });
      this.albumSub = this.artistService
        .getArtistAlbums(this.artistId)
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

            this.albums = uniqueAlbums.filter(
              (item) => item.images.length !== 0
            );
          },
          error: () => this.router.navigate(['']),
        });

      this.topTracksSub = this.artistService
        .getArtistTopTracks(this.artistId)
        .subscribe({
          next: (res) => (this.topTracks = res.tracks),
          error: () => this.router.navigate(['']),
        });

      this.relatedArtistSub = this.artistService
        .getRelatedArtists(this.artistId)
        .subscribe({
          next: (res) => (this.relatedArtists = res.artists),
          error: () => this.router.navigate(['']),
        });
    });
  }

  ngOnDestroy(): void {
    this.detailsSub.unsubscribe();
    this.albumSub.unsubscribe();
    this.relatedArtistSub.unsubscribe();
    this.topTracksSub.unsubscribe();
  }

  navigateToArtistPage(id: string) {
    this.router.navigate(['artist', id]);
    this.store.dispatch(saveArtistId({ id }));
    this.scrollTo.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
