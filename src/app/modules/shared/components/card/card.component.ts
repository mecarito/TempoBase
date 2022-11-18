import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Album,
  Artist,
  Cards,
  Category,
  Episode,
  Playlist,
  Show,
} from 'app-types';
import { sampleImgUrl } from '../../constants';
import { calculateBackgroundColor } from '../../utils/background-color';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() variant!: Cards;
  @Input() category!: Category;
  @Input() artist!: Artist;
  @Input() artistDetails!: Artist;
  @Input() album!: Album;
  @Input() playlist!: Playlist;
  @Input() show!: Show;
  @Input() episode!: Episode;
  @Output() clickEvent = new EventEmitter<string>();

  url = sampleImgUrl;
  bgColor = calculateBackgroundColor;

  constructor() {}

  ngOnInit(): void {}

  getItemId(id: string) {
    this.clickEvent.emit(id);
  }

  getBgImage() {
    return `url(${this.artistDetails.images[0].url})`;
  }
}
