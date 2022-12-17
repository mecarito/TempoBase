import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icons } from 'app-types';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() variant!: Icons;
  @Output() clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  iconClicked() {
    this.clickEvent.emit();
  }
}
