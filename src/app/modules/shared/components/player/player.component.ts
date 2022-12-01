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

  audioDuration!: number;
  currentTime: number = 0;

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

    // const audio = document.querySelector('audio');

    // if (audio) {
    //   const bufferedAmount = audio.buffered.end(audio.buffered.length - 1);
    //   this.currentTime = audio.currentTime
    // }
  }

  ngAfterViewInit() {
    // console.log(this.audio.nativeElement.duration);
  }

  onLoadedMetaData(audio: HTMLAudioElement) {
    this.audioDuration = audio.duration;
    // this.audioSlider.nativeElement.max = String(Math.round(audio.duration));
    const bufferedAmount = audio.buffered.end(audio.buffered.length - 1);
    const seekableAmount = audio.seekable.end(audio.seekable.length - 1);
    // console.log(audio.duration, bufferedAmount, seekableAmount);
  }

  onPlaying(audio: HTMLAudioElement) {
    // console.log(audio.currentTime)
    this.currentTime = audio.currentTime;
  }

  onDurationChange(audio: HTMLAudioElement) {
    const bufferedAmount = audio.buffered.end(audio.buffered.length - 1);
    const seekableAmount = audio.seekable.end(audio.seekable.length - 1);

    console.log(bufferedAmount, seekableAmount);
  }

  audioSliderChange() {
    const val = this.audioSlider.nativeElement.value;
    this.audioSlider.nativeElement.style.backgroundSize = `${val}% 100%`;
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
