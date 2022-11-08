import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../shared/services/categories.service';
import {
  Category,
  Artist,
  Album,
  Track,
  Playlist,
  Show,
  Episode,
} from 'app-types';
import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  searchTerm!: string;
  categorySub!: Subscription;
  searchSub!: Subscription;
  categories: Category[] = [];
  artists: Artist[] = [];
  albums: Album[] = [];
  tracks: Track[] = [];
  playlists: Playlist[] = [];
  shows: Show[] = [];
  episodes: Episode[] = [];

  searchResultsCategories = [
    'All',
    'Songs',
    'Artists',
    'Playlists',
    'Albums',
    'Podcasts & shows',
    'Episodes',
  ];

  constructor(
    private categoryService: CategoriesService,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categorySub = this.categoryService.categories$.subscribe({
      next: (res) => (this.categories = res.categories.items),
      error: () => this.router.navigate(['']),
    });
    this.searchSub = this.searchService.searchResults$.subscribe({
      next: (res) => {
        this.artists = res.artists.items.filter(
          (item) => item.images.length !== 0
        );
        this.albums = res.albums.items.filter(
          (item) => item.images.length !== 0
        );
        this.playlists = res.playlists.items.filter(
          (item) => item.images.length !== 0
        );
        this.shows = res.shows.items.filter((item) => item.images.length !== 0);
        this.episodes = res.episodes.items.filter(
          (item) => item.images.length !== 0
        );
        this.tracks = res.tracks.items.filter(
          (item) => item.album.images.length !== 0
        );
        console.log(res);
      },
      error: () => this.router.navigate(['']),
    });
  }
  ngOnDestroy(): void {
    this.categorySub.unsubscribe();
    this.searchSub.unsubscribe();
  }

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

  navigateToArtistPage(id: string) {
    console.log(id);
  }

  search(search: string) {
    this.searchTerm = search;
    if (search) {
      this.searchService.setSearchTerm(search);
    }
  }
}
