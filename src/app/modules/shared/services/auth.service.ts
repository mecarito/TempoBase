import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from 'app-types';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authUrl = 'https://accounts.spotify.com/api/token';
  constructor(private http: HttpClient) {}

  getAccessToken(): Observable<AuthResponse> {
    const body = 'grant_type=client_credentials';
    return this.http.post<AuthResponse>(this.authUrl, body);
  }
}
