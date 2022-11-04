import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // check if title is not in view and change the background of search header
  @HostListener('document:mousewheel', ['$event'])
  onscroll(event: Event) {
    const title = document.getElementById('title');
    const header = document.getElementById('header');

    if (title?.getBoundingClientRect().y !== title?.offsetTop) {
      if (header) {
        header.style.backgroundColor = '#070707';
      }
    } else {
      if (header) {
        header.style.backgroundColor = '#121212';
      }
    }
  }
}
