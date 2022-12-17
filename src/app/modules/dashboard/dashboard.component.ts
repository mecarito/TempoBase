import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TrackState } from 'app-types';
import { Subscription } from 'rxjs';
import { selectTrackData } from 'store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  trackDataSub!: Subscription;
  track!: TrackState;
  sidebarVisible = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.trackDataSub = this.store
      .select(selectTrackData as any)
      .subscribe((data: any) => {
        this.track = data;
      });
  }

  ngOnDestroy(): void {
    this.trackDataSub.unsubscribe();
  }

  showSideBar() {
    this.sidebarVisible = true;
  }

  hideSideBar() {
    this.sidebarVisible = false;
  }
}
