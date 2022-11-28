import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist, PlaylistTrack } from 'app-types';
import { Subscription } from 'rxjs';
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
    private playlistService: PlaylistService
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
}
