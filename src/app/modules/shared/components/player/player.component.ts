import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { sampleImgUrl } from '../../constants';
import { audioCurrentTIme, sliderPercentage } from '../../utils/audio';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  url = sampleImgUrl;
  playing = false;
  muted = false;
  favorite = false;

  audioDuration!: number;
  currentTime: number = 0;
  sliderPercentage: string = '0';

  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioSlider') audioSlider!: ElementRef<HTMLInputElement>;
  @ViewChild('volumeSlider') volumeSlider!: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {
    let slider = document.getElementById('track-time');
    if (slider) {
      slider.style.backgroundSize = '0 100%';
    }

    let volume = document.getElementById('volume-level');
    if (volume) {
      volume.style.backgroundSize = '20% 100%';
    }
  }

  onLoadedMetaData(audio: HTMLAudioElement) {
    this.audioDuration = audio.duration;
  }

  onPlaying(audio: HTMLAudioElement) {
    this.currentTime = audio.currentTime;
    this.sliderPercentage = sliderPercentage(
      this.currentTime,
      this.audioDuration
    );
    this.audioSlider.nativeElement.style.backgroundSize = `${this.sliderPercentage}% 100%`;
  }

  audioSliderChange() {
    if (!this.audio.nativeElement.paused) {
      this.audio.nativeElement.pause();
      this.playing = false
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
      this.playing = true
    }
    const val = this.audioSlider.nativeElement.value;
    this.audio.nativeElement.currentTime = audioCurrentTIme(
      val,
      this.audioDuration
    );
  }

 

  volumeSliderChange() {
    const val = this.volumeSlider.nativeElement.value;
    this.volumeSlider.nativeElement.style.backgroundSize = `${val}% 100%`;
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
