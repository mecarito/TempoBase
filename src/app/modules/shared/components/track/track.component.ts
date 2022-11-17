import { Component, Input, OnInit } from '@angular/core';
import { Track, TrackComponents } from 'app-types';
import { sampleImgUrl } from '../../constants';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  @Input() variant!: TrackComponents;
  @Input() track!: Track
  @Input() index!: number
  
  favorite = false;
  hovered = false;

  url = sampleImgUrl;

  constructor() {}

  ngOnInit(): void {}

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
