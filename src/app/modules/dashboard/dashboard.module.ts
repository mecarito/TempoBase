import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: SearchPageComponent },
      { path: 'search', redirectTo: '', pathMatch: 'full' },
      { path: 'artist/:id', component: ArtistPageComponent },
      { path: 'album/:id', component: AlbumPageComponent },
      { path: 'show/:id', component: ShowPageComponent },
      { path: 'episode/:id', component: EpisodePageComponent },
      { path: 'playlist/:id', component: PlaylistPageComponent },
    ],
  },
];
@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    SearchPageComponent,
    ArtistPageComponent,
    AlbumPageComponent,
    ShowPageComponent,
    EpisodePageComponent,
    PlaylistPageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
