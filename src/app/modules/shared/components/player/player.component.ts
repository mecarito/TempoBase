import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TrackState } from 'app-types';
import { sampleImgUrl } from '../../constants';
import { audioCurrentTIme, sliderPercentage } from '../../utils/audio';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() track!: TrackState;
  url = sampleImgUrl;
  playing = false;
  muted = false;
  favorite = false;

  audioDuration: number = 0
  currentTime: number = 0;
  audioSliderPercentage: string = '0';
  volumeSliderPercentage: string = '10';

  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioSlider') audioSlider!: ElementRef<HTMLInputElement>;
  @ViewChild('volumeSlider') volumeSlider!: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  onLoadedMetaData(audio: HTMLAudioElement) {
    this.volumeSlider.nativeElement.style.backgroundSize = '10% 100%';
    this.audioSlider.nativeElement.style.backgroundSize = '0 100%';
    this.audioDuration = audio.duration;
    this.audio.nativeElement.volume = 0.1;
    this.playing = true;
  }

  onPlaying(audio: HTMLAudioElement) {
    this.currentTime = audio.currentTime;
    this.audioSliderPercentage = sliderPercentage(
      this.currentTime,
      this.audioDuration
    );
    this.audioSlider.nativeElement.style.backgroundSize = `${this.audioSliderPercentage}% 100%`;
  }

  audioSliderChange() {
    if (!this.audio.nativeElement.paused) {
      this.audio.nativeElement.pause();
      this.playing = false;
    }
    const val = this.audioSlider.nativeElement.value;
    this.currentTime = audioCurrentTIme(val, this.audioDuration);
    this.audio.nativeElement.currentTime = audioCurrentTIme(
      val,
      this.audioDuration
    );
  }

  audioTimeChange() {
    if (this.audio.nativeElement.paused) {
      this.audio.nativeElement.play();
      this.playing = true;
    }
  }

  volumeSliderChange() {
    const val = this.volumeSlider.nativeElement.value;
    const volume = Number(val) * 0.01;
    this.volumeSlider.nativeElement.style.backgroundSize = `${val}% 100%`;

    if (volume === 0) {
      this.muted = true;
      this.audio.nativeElement.volume = volume;
    } else {
      this.muted = false;
      this.audio.nativeElement.volume = volume;
    }
  }

  play() {
    this.playing = true;
    this.audio.nativeElement.play();
  }

  pause() {
    this.playing = false;
    this.audio.nativeElement.pause();
  }

  mute() {
    this.muted = true;
    this.audio.nativeElement.muted = true;
  }

  unMute() {
    this.muted = false;
    this.audio.nativeElement.muted = false;
  }

  addToFavorite() {
    this.favorite = true;
  }

  removeFromFavorite() {
    this.favorite = false;
  }
}
