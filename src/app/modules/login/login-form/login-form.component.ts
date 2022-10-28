import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginWays = [
    {
      name: 'Continue with your account',
      onClick: () => console.log('user login'),
    },
    {
      name: 'Continue with mine',
      onClick: () => console.log('personal login'),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
