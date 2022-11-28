import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Episode } from 'app-types';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class EpisodeService {
  private baseUrl = environment.api_base_url;
  private episodeUrl = `${this.baseUrl}/episodes`;

  constructor(private http: HttpClient) {}

  getEpisode(id: string | null): Observable<Episode> {
    return this.http
      .get<Episode>(`${this.episodeUrl}/${id}`, {
        params: {
          market: 'US',
        },
      })
      .pipe(retry(1));
  }
}
