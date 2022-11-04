import { Component, OnInit } from '@angular/core';
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
  upSection: Section[] = [
    {
      title: 'Home',
      link: 'home',
      iconName: 'home',
    },
    {
      title: 'Search',
      link: 'search',
      iconName: 'search',
    },
    {
      title: 'Your library',
      link: 'collection',
      iconName: 'library',
    },
  ];

  downSection: Section[] = [
    {
      title: 'Create Playlist',
      link: 'playlist',
      iconName: 'add',
    },
    {
      title: 'Liked Songs',
      link: 'liked-songs',
      iconName: 'heart-white',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
