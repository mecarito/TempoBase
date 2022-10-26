import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let slider = document.getElementById('track-time');
    if (slider) {
      slider.style.backgroundSize = '20% 100%';
      console.log(slider.style.backgroundSize);
    }
  }

  handleInputChange(e: Event) {
    let target = e.target as HTMLInputElement;
    const min = Number(target.min);
    const max = Number(target.max);
    const val = Number(target.value);

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
  }
}
