import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { DiscoverComponent } from './discover/discover.component';
import { RecentPlayedComponent } from './recent-played/recent-played.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { RightBarComponent } from './right-bar/right-bar.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'artists', component: ArtistsComponent },
      { path: 'discover', component: DiscoverComponent },
      { path: 'played-recently', component: RecentPlayedComponent },
      { path: 'playlist', component: PlaylistsComponent }
    ],
  },
];
@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HomeComponent,
    AlbumsComponent,
    ArtistsComponent,
    DiscoverComponent,
    RecentPlayedComponent,
    PlaylistsComponent,
    RightBarComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
