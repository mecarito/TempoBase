import { Component, Input, OnInit } from '@angular/core';
import { CardVariant } from 'app-types';
import { sampleImgUrl, categoryColors } from '../../constants';
import { calculateBackgroundColor } from '../../utils/background-color';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() variant!: CardVariant;
  url = sampleImgUrl;
  bgColor = calculateBackgroundColor;
  bgImage = `url(${this.url})`

  constructor() {}

  ngOnInit(): void {}
}
