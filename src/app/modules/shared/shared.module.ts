import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeSwitchComponent } from './components/mode-switch/mode-switch.component';
import { PlayerComponent } from './components/player/player.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { TrackComponent } from './components/track/track.component';
import { CardComponent } from './components/card/card.component';
import { IconComponent } from './components/icon/icon.component';
import { ChipComponent } from './components/chip/chip.component';
import { MinutesPipe } from './pipes/minutes.pipe';
import { SecondsPipe } from './pipes/seconds.pipe';

@NgModule({
  declarations: [
    ModeSwitchComponent,
    PlayerComponent,
    SearchComponent,
    UserComponent,
    TrackComponent,
    CardComponent,
    IconComponent,
    ChipComponent,
    MinutesPipe,
    SecondsPipe,
  ],

  imports: [CommonModule],
  exports: [
    ModeSwitchComponent,
    PlayerComponent,
    SearchComponent,
    UserComponent,
    TrackComponent,
    CardComponent,
    IconComponent,
    ChipComponent,
    MinutesPipe,
  ],
})
export class SharedModule {}
