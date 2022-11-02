import { Component, Input, OnInit } from '@angular/core';
import { CardVariant } from 'types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() variant!: CardVariant;

  constructor() {}

  ngOnInit(): void {}
}
