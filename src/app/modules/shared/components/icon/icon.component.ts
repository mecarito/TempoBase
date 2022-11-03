import { Component, Input, OnInit } from '@angular/core';
import { Icons } from 'app-types';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() variant!: Icons;
 
  constructor() {}

  ngOnInit(): void {}
}
