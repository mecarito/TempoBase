import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { CategoriesResponse } from 'app-types';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private baseUrl = environment.api_base_url;
  private categoriesUrl = `${this.baseUrl}/browse/categories`;

  constructor(private http: HttpClient) {}

  public categories$ = this.http
    .get<CategoriesResponse>(this.categoriesUrl, {
      params: {
        limit: 50,
      },
    })
    .pipe(retry(1));
}
