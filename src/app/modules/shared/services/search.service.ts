import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchResults } from 'app-types';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private baseUrl = environment.api_base_url;
  private searchUrl = `${this.baseUrl}/search`;

  private searchSubject = new Subject<string>();
  private search$ = this.searchSubject.asObservable();

  constructor(private http: HttpClient) {}

  searchResults$ = this.search$.pipe(
    debounceTime(1000),
    switchMap((search) => {
      return this.http.get<SearchResults>(this.searchUrl, {
        params: {
          q: search,
          include_external: 'audio',
          type: 'album,artist,playlist,track,show,episode',
          limit: 10,
          market: 'US'
        },
      });
    })
  );

  setSearchTerm(search: string) {
    this.searchSubject.next(search);
  }
}
