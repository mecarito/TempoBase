import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeSwitchComponent } from './components/mode-switch/mode-switch.component';
import { PlayerComponent } from './components/player/player.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { TrackComponent } from './components/track/track.component';

@NgModule({
  declarations: [
    ModeSwitchComponent,
    PlayerComponent,
    SearchComponent,
    UserComponent,
    TrackComponent,
  ],
  imports: [CommonModule],
  exports: [
    ModeSwitchComponent,
    PlayerComponent,
    SearchComponent,
    UserComponent,
    TrackComponent,
  ],
})
export class SharedModule {}
