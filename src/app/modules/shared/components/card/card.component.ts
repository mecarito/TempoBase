import { Component, Input, OnInit } from '@angular/core';
import { Artists, Cards, Categories } from 'app-types';
import { sampleImgUrl } from '../../constants';
import { calculateBackgroundColor } from '../../utils/background-color';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() variant!: Cards;
  @Input() category!: Categories
  @Input() artist!: Artists
  
  url = sampleImgUrl;
  
  bgColor = calculateBackgroundColor;
  bgImage = `url(${this.url})`

  constructor() {}

  ngOnInit(): void {}
}
