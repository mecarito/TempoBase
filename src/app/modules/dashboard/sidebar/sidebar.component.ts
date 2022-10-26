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
      link: 'home',
    },
    {
      name: 'Albums',
      imageSrc: 'assets/icons/book.svg',
      link: 'albums',
    },
    {
      name: 'Artist',
      imageSrc: 'assets/icons/user.svg',
      link: 'artists',
    },
    {
      name: 'Discover',
      imageSrc: 'assets/icons/search.svg',
      link: 'discover',
    },
  ];
  playlists = [
    {
      name: 'Played recently',
      imageSrc: 'assets/icons/clock.svg',
      link: 'played-recently',
    },
    {
      name: 'Favorites',
      imageSrc: 'assets/icons/heart.svg',
      link: 'playlist',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
