import { Component, Input, OnInit } from '@angular/core';
import { Artist, Cards, Category } from 'app-types';
import { sampleImgUrl } from '../../constants';
import { calculateBackgroundColor } from '../../utils/background-color';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() variant!: Cards;
  @Input() category!: Category
  @Input() artist!: Artist
  
  url = sampleImgUrl;
  
  bgColor = calculateBackgroundColor;
  bgImage = `url(${this.url})`

  constructor() {}

  ngOnInit(): void {}
}
