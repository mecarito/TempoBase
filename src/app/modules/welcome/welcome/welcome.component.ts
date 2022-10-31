import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  getAccessToken() {
    this.authService.getAccessToken().subscribe((val) => console.log(val));
  }
}
