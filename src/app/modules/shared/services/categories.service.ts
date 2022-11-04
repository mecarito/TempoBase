import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private baseUrl = environment.api_base_url;
  private categoriesUrl = `${this.baseUrl}/browse/categories`;

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.categoriesUrl, {
      params: {
        limit: 50,
      },
    });
  }
}
