import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Icons } from 'app-types';

interface Section {
  title: string;
  link: string;
  iconName: Icons;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() closeBtnEvent = new EventEmitter();

  upSection: Section[] = [
    {
      title: 'Search',
      link: 'search',
      iconName: 'search',
    },
    {
      title: 'Liked Songs',
      link: 'favorite',
      iconName: 'heart-white',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.closeBtnEvent.emit();
  }
}
