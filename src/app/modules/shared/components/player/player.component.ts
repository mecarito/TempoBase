import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { sampleImgUrl } from '../../constants';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, AfterViewInit {
  url = sampleImgUrl;
  playing = false;
  muted = false;
  favorite = false;

  audioDuration!: number

  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;
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

    // const audio = document.querySelector('audio');

    // if (audio) {
    //   audio.addEventListener('loadedmetadata', () => {
    //       console.log(audio.duration, this.audio.nativeElement.duration)
    //   });
    // }

    // if (this.audio) {
    //   this.audio.nativeElement.onloadedmetadata()
    // }
  }

  ngAfterViewInit() {
    // console.log(this.audio.nativeElement.duration);
  }

  onLoadedMetaData(audio: HTMLAudioElement) {
    this.audioDuration = audio.duration
     console.log(audio.duration)
  }

  handleInputChange(e: Event) {
    let target = e.target as HTMLInputElement;
    const min = Number(target.min);
    const max = Number(target.max);
    const val = Number(target.value);

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
  }

  play() {
    this.playing = true;
  }

  pause() {
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
