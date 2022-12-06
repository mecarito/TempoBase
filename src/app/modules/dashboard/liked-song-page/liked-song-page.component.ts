import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Track } from 'app-types';
import { Subscription } from 'rxjs';
import { saveTrack, selectFavoriteTracks } from 'store';

@Component({
  selector: 'app-liked-song-page',
  templateUrl: './liked-song-page.component.html',
  styleUrls: ['./liked-song-page.component.scss'],
})
export class LikedSongPageComponent implements OnInit, OnDestroy {
  favoritesSub!: Subscription;
  favoriteTracks: Track[] = [];

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.favoritesSub = this.store
      .select(selectFavoriteTracks as any)
      .subscribe((tracks: any) => {
        this.favoriteTracks = tracks;
      });
  }

  ngOnDestroy(): void {
    this.favoritesSub.unsubscribe();
  }

  findSongs() {
    this.router.navigate(['search'])
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
}
