import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginWays = [
    {
      name: 'Continue with your account',
      onClick: () => console.log('personal login'),
    },
    {
      name: 'Continue with mine',
      onClick: () => console.log('personal login'),
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getAccessToken().subscribe((val) => console.log(val));
  }
}
