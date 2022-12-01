import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
import { Store } from '@ngrx/store';
import { saveTrack, saveAlbumId, saveArtistId } from 'store';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
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
  noResults = false;

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
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.categorySub = this.categoryService.categories$.subscribe({
      next: (res) => (this.categories = res.categories.items),
      error: () => this.router.navigate(['']),
    });
    this.searchSub = this.searchService.searchResults$.subscribe({
      next: (res) => {
        if (
          res.albums.items.length === 0 &&
          res.artists.items.length === 0 &&
          res.episodes.items.length === 0 &&
          res.playlists.items.length === 0 &&
          res.shows.items.length === 0 &&
          res.tracks.items.length === 0
        ) {
          this.noResults = true;
        } else {
          this.noResults = false;
        }
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
      },
      error: () => this.router.navigate(['']),
    });
  }
  ngOnDestroy(): void {
    this.categorySub.unsubscribe();
    this.searchSub.unsubscribe();
  }

  navigateToArtistPage(id: string) {
    this.router.navigate(['artist', id]);
    this.store.dispatch(saveArtistId({ id }));
  }

  navigateToAlbumPage(id: string) {
    this.router.navigate(['album', id]);
    this.store.dispatch(saveAlbumId({ id }));
  }

  navigateToShowPage(id: string) {
    this.router.navigate(['show', id]);
  }

  navigateToEpisodePage(id: string) {
    this.router.navigate(['episode', id]);
  }

  navigateToPlaylistPage(id: string) {
    this.router.navigate(['playlist', id]);
  }

  search(search: string) {
    this.searchTerm = search;
    if (search) {
      this.searchService.setSearchTerm(search);
    }
  }

  addToPlayer(track: Track) {
    console.log(track);
    this.store.dispatch(
      saveTrack({
        images: track.album.images,
        previewUrl: track.preview_url,
        trackName: track.name,
        artistName: track.artists[0].name,
      })
    );
  }
}
