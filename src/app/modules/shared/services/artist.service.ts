import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, merge, retry } from 'rxjs';
import { Artist, Track, AlbumBody, ArtistTracks } from 'app-types';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { selectArtistId } from '../store/selectors/selectors';

@Injectable({ providedIn: 'root' })
export class ArtistService {
  private baseUrl = environment.api_base_url;
  private artistsUrl = `${this.baseUrl}/artists`;
  private artistId!: string;

  constructor(private http: HttpClient, private store: Store) {}

  getArtistId() {
    this.store.select(selectArtistId as any).subscribe((id) => {
      this.artistId = id as any;
    });
    return this.artistId;
  }

  public artistDetails$ = this.http
    .get<Artist>(`${this.artistsUrl}/${this.getArtistId()}`)
    .pipe(retry(1));

  public artistTopTracks$ = this.http
    .get<ArtistTracks>(`${this.artistsUrl}/${this.getArtistId()}/top-tracks`, {
      params: {
        market: 'US',
      },
    })
    .pipe(retry(1));

  public artistRelatedArtists$ = this.http
    .get<Artist[]>(`${this.artistsUrl}/${this.getArtistId()}/related-artists`)
    .pipe(retry(1));

  public artistAlbums$ = this.http
    .get<AlbumBody>(`${this.artistsUrl}/${this.getArtistId()}/albums`, {
      params: {
        limit: 10,
      },
    })
    .pipe(retry(1));

}
