import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { AlbumBody, Album } from 'app-types';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private baseUrl = environment.api_base_url;
  private albumUrl = `${this.baseUrl}/albums`;

  constructor(private http: HttpClient) {}

  // sometimes the api return album duplicates
  getAlbum(id: string | null): Observable<Album> {
    return this.http
      .get<Album>(`${this.albumUrl}/${id}`, {
        params: {
          market: 'US',
        },
      })
      .pipe(retry(1));
  }
}
