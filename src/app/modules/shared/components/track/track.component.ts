import { Component, Input, OnInit } from '@angular/core';
import { TrackComponentVariant } from 'app-types';
import { sampleImgUrl } from '../../constants';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  @Input() variant!: TrackComponentVariant;
  favorite = false;
  url = sampleImgUrl;

  constructor() {}

  ngOnInit(): void {}

  addToFavorite() {
    this.favorite = true;
  }

  removeFromFavorite() {
    this.favorite = false
  }
}
