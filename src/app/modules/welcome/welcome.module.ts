import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [WelcomeComponent],
})
export class WelcomeModule {}
