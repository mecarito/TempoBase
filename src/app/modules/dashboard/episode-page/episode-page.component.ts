import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Episode } from 'app-types';
import { Subscription } from 'rxjs';
import { saveTrack } from 'store';
import { EpisodeService } from '../../shared/services/episode.service';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.scss'],
})
export class EpisodePageComponent implements OnInit, OnDestroy {
  episodeSub!: Subscription;
  episode!: Episode;
  episodeId!: string | null;
  playing = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private episodeService: EpisodeService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.episodeId = this.route.snapshot.paramMap.get('id');
    this.episodeSub = this.episodeService.getEpisode(this.episodeId).subscribe({
      next: (episode) => {
        this.episode = episode;
      },
      error: () => this.router.navigate(['']),
    });
  }

  ngOnDestroy(): void {
    this.episodeSub.unsubscribe();
  }

  navigateToShowPage(id: string) {
    this.router.navigate(['show', id]);
  }
  play() {
    this.playing = true;
    if (this.episode.audio_preview_url) {
      this.store.dispatch(
        saveTrack({
          images: this.episode.images,
          previewUrl: this.episode.audio_preview_url,
          trackName: this.episode.name,
          artistName: this.episode.show.name,
        })
      );
    } else {
      alert(
        `Episode ${this.episode.name} has no preview url hence can't be played`
      );
    }
  }

  pause() {
    this.playing = false;
  }
}
