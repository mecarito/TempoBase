import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchResults } from 'app-types';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private baseUrl = environment.api_base_url;
  private searchUrl = `${this.baseUrl}/search`;

  constructor(private http: HttpClient) {}

  getItems(search: string): Observable<SearchResults> {
    return this.http
      .get<SearchResults>(this.searchUrl, {
        params: {
          q: search,
          type: 'album,artist,playlist,track,show,episode',
          limit: 50,
        },
      })
      .pipe(retry(1));
  }
}
