import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Artist, AlbumBody, ArtistTracks, RelatedArtists } from 'app-types';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class ArtistService {
  private baseUrl = environment.api_base_url;
  private artistsUrl = `${this.baseUrl}/artists`;

  constructor(private http: HttpClient, private store: Store) {}

  getArtistDetails(id: string | null): Observable<Artist> {
    return this.http.get<Artist>(`${this.artistsUrl}/${id}`).pipe(retry(1));
  }

  getArtistTopTracks(id: string | null): Observable<ArtistTracks> {
    return this.http
      .get<ArtistTracks>(`${this.artistsUrl}/${id}/top-tracks`, {
        params: {
          market: 'US',
        },
      })
      .pipe(retry(1));
  }

  getRelatedArtists(id: string | null): Observable<RelatedArtists> {
    return this.http
      .get<RelatedArtists>(`${this.artistsUrl}/${id}/related-artists`)
      .pipe(retry(1));
  }

  // sometimes the api return album duplicates
  getArtistAlbums(id: string | null): Observable<AlbumBody> {
    return this.http
      .get<AlbumBody>(`${this.artistsUrl}/${id}/albums`, {
        params: {
          limit: 10,
          market: 'US',
          include_groups: 'album',
        },
      })
      .pipe(retry(1));
  }
}
