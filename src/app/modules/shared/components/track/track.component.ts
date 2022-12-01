import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlaylistTrack, Track, TrackComponents } from 'app-types';
import { sampleImgUrl } from '../../constants';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  @Input() variant!: TrackComponents;
  @Input() track!: Track;
  @Input() index!: number;
  @Output() clickEvent = new EventEmitter<Track>();

  favorite = false;
  hovered = false;

  url = sampleImgUrl;

  constructor() {}

  ngOnInit(): void {}

  getTrack(track: Track) {
    this.clickEvent.emit(track);
  }

  addToFavorite() {
    this.favorite = true;
  }

  removeFromFavorite() {
    this.favorite = false;
  }

  mouseMovement(state: boolean) {
    this.hovered = state;
  }
}
