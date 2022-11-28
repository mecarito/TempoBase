import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Playlist } from 'app-types';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
  private baseUrl = environment.api_base_url;
  private playlistUrl = `${this.baseUrl}/playlists`;

  constructor(private http: HttpClient) {}

  getPlaylist(id: string | null): Observable<Playlist> {
    return this.http
      .get<Playlist>(`${this.playlistUrl}/${id}`, {
        params: {
          market: 'US',
        },
      })
      .pipe(retry(1));
  }
}
