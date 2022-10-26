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

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [DashboardComponent, SidebarComponent, HomeComponent, AlbumsComponent, ArtistsComponent, DiscoverComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DashboardModule {}
