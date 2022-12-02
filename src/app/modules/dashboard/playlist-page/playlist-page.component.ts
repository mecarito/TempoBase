import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Playlist, PlaylistTrack, Track } from 'app-types';
import { Subscription } from 'rxjs';
import { saveTrack } from 'store';
import { PlaylistService } from '../../shared/services/playlist.service';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss'],
})
export class PlaylistPageComponent implements OnInit, OnDestroy {
  playlistSub!: Subscription;
  playlist!: Playlist;
  playlistId!: string | null;
  playlistTracks: PlaylistTrack[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playlistService: PlaylistService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    this.playlistSub = this.playlistService
      .getPlaylist(this.playlistId)
      .subscribe({
        next: (playlist) => {
          this.playlist = playlist;
          this.playlistTracks = playlist.tracks.items;
        },
        error: () => this.router.navigate(['']),
      });
  }

  ngOnDestroy(): void {
    this.playlistSub.unsubscribe();
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
