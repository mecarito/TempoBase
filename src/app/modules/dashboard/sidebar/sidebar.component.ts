import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menus = [
    {
      name: 'Home',
      imageSrc: 'assets/icons/home.svg',
      link: '',
    },
    {
      name: 'Albums',
      imageSrc: 'assets/icons/book.svg',
      link: '',
    },
    {
      name: 'Artist',
      imageSrc: 'assets/icons/user.svg',
      link: '',
    },
    {
      name: 'Discover',
      imageSrc: 'assets/icons/search.svg',
      link: '',
    },
  ];
  playlists = [
    {
      name: 'Recent',
      imageSrc: 'assets/icons/clock.svg',
      link: '',
    },
    {
      name: 'Favorites',
      imageSrc: 'assets/icons/heart.svg',
      link: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
