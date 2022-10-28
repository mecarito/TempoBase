import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../../../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() album!: Album;

  constructor() {}

  ngOnInit(): void {}
}
