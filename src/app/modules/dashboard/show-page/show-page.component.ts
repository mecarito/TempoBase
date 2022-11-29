import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Episode, Show } from 'app-types';
import { Subscription } from 'rxjs';
import { ShowService } from '../../shared/services/show.service';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.scss'],
})
export class ShowPageComponent implements OnInit, OnDestroy {
  showSub!: Subscription;
  show!: Show;
  showId!: string | null;
  episodes: Episode[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private showService: ShowService
  ) {}

  ngOnInit(): void {
    this.showId = this.route.snapshot.paramMap.get('id');
    this.showSub = this.showService.getShow(this.showId).subscribe({
      next: (show) => {
        this.show = show;
        this.episodes = show.episodes.items;
      },
      error: () => this.router.navigate(['']),
    });
  }

  ngOnDestroy(): void {
    this.showSub.unsubscribe();
  }

  navigateToEpisodePage(id: string) {
     this.router.navigate(['episode', id]);
  }
}
