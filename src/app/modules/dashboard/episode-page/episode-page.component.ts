import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Episode } from 'app-types';
import { Subscription } from 'rxjs';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private episodeService: EpisodeService
  ) {}

  ngOnInit(): void {
    this.episodeId = this.route.snapshot.paramMap.get('id');
    this.episodeSub = this.episodeService.getEpisode(this.episodeId).subscribe({
      next: (episode) => {
        this.episode = episode
        console.log(episode)
      },
      error: () => this.router.navigate(['']),
    });
  }

  ngOnDestroy(): void {
    this.episodeSub.unsubscribe();
  }
}
