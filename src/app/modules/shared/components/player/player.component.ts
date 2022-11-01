import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  playing = false;
  muted = false;
  favorite = false;

  constructor() {}

  ngOnInit(): void {
    let slider = document.getElementById('track-time');
    if (slider) {
      slider.style.backgroundSize = '20% 100%';
    }

    let volume = document.getElementById('volume-level');
    if (volume) {
      volume.style.backgroundSize = '20% 100%';
    }
  }

  handleInputChange(e: Event) {
    let target = e.target as HTMLInputElement;
    const min = Number(target.min);
    const max = Number(target.max);
    const val = Number(target.value);

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
  }

  Play() {
    this.playing = true;
  }

  Pause() {
    this.playing = false;
  }

  mute() {
    this.muted = true;
  }

  unMute() {
    this.muted = false;
  }

  addToFavorite() {
    this.favorite = true;
  }

  removeFromFavorite() {
    this.favorite = false;
  }
}
