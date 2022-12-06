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
  @Input() favorite!: boolean;
  @Output() clickEvent = new EventEmitter<Track>();
  @Output() addToFavoriteEvent = new EventEmitter<Track>();
  @Output() removeFromFavoriteEvent = new EventEmitter<Track>();

  hovered = false;

  url = sampleImgUrl;

  constructor() {}

  ngOnInit(): void {}

  getTrack(track: Track) {
    this.clickEvent.emit(track);
  }

  addToFavorite(track: Track) {
    this.favorite = true;
    this.addToFavoriteEvent.emit(track);
  }

  removeFromFavorite(track: Track) {
    this.favorite = false;
    this.removeFromFavoriteEvent.emit(track)
  }

  mouseMovement(state: boolean) {
    this.hovered = state;
  }
}
