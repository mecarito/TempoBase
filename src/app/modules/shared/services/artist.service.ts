import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Artist } from 'app-types';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { selectArtistId } from '../store/selectors/selectors';

@Injectable({ providedIn: 'root' })
export class ArtistService {
  private baseUrl = environment.api_base_url;
  private artistsUrl = `${this.baseUrl}/artists`;
  private artistId!: string;

  constructor(private http: HttpClient, private store: Store) {}

  getArtistDetails(): Observable<Artist> {
    this.store.select(selectArtistId as any).subscribe((id) => {
      this.artistId = id as any;
    });
    return this.http
      .get<Artist>(`${this.artistsUrl}/${this.artistId}`)
      .pipe(retry(1));
  }
}
