import { Component, Input, OnInit } from '@angular/core';
import { CardVariant } from 'app-types';
import { sampleImgUrl, categoryColors } from '../../constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() variant!: CardVariant;
  url = sampleImgUrl;


  constructor() {}

  ngOnInit(): void { }
}
