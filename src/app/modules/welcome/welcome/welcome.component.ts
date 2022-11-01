import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../shared/services/auth.service';
import { saveAccessToken } from '../../shared/store/actions/auth.actions';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getAccessToken() {
    this.authService.getAccessToken().subscribe({
      next: (res) => {
        this.saveAccessToken(res.access_token);
        this.router.navigate(['dashboard']);
      },
      error: () => alert('An error occured fetching access token'),
    });
  }

  saveAccessToken(token: string) {
    this.store.dispatch(saveAccessToken({ accessToken: token }));
  }
}