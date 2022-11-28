import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Show } from 'app-types';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ShowService {
  private baseUrl = environment.api_base_url;
  private showUrl = `${this.baseUrl}/shows`;

  constructor(private http: HttpClient) {}

  getShow(id: string | null): Observable<Show> {
    return this.http
      .get<Show>(`${this.showUrl}/${id}`, {
        params: {
          market: 'US',
        },
      })
      .pipe(retry(1));
  }
}
