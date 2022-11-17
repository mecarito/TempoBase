import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist, ArtistTracks, Track } from 'app-types';
import { Observable, Subscription } from 'rxjs';
import { ArtistService } from '../../shared/services/artist.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss'],
})
export class ArtistPageComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  popularTracks$!: Observable<ArtistTracks>;
  artist!: Artist

  constructor(private artistService: ArtistService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.artistService.artistDetails$.subscribe({
      next: (artist) => this.artist = artist,
      error: () => this.router.navigate(['']),
    });
    this.popularTracks$ = this.artistService.artistTopTracks$;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
