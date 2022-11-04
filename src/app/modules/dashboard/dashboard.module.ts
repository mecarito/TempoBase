import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      { path: 'search', component: SearchPageComponent },
      { path: 'collection', component: CollectionPageComponent },
    ],
  },
];
@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HomePageComponent,
    SearchPageComponent,
    CollectionPageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
