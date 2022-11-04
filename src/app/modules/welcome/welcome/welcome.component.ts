import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getAccessToken() {
    this.authService.getAccessToken().subscribe({
      next: (res) => {
        localStorage.setItem('accessToken', res.access_token)
        this.router.navigate(['app']);
      },
      error: () => alert('An error occured fetching access token'),
    });
  }


}
