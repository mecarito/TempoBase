import { Component, Input, OnInit } from '@angular/core';
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

  url = sampleImgUrl;
  bgColor = calculateBackgroundColor;
  bgImage = `url(${this.url})`;

  constructor() {}

  ngOnInit(): void {}
}
