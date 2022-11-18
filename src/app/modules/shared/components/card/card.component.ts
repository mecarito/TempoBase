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
  @Input() album!: Album;
  @Input() playlist!: Playlist;
  @Input() show!: Show;
  @Input() episode!: Episode;
  @Output() clickEvent = new EventEmitter<string>();
  // bgImage!: string;

  url = sampleImgUrl;
  bgColor = calculateBackgroundColor;
  bgImage = `url(${this.url})`;

  constructor() {}

  ngOnInit(): void {
    // if (this.artist) {
    //   this.bgImage = `url(${this.artist.images[0].url})`;
    //   console.log(this.artist);
    // } else {
    //   this.bgImage = `url(${this.url})`;
    // }
  }

  getItemId(id: string) {
    this.clickEvent.emit(id);
  }
}
