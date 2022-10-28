import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.scss']
})
export class RightBarComponent implements OnInit {

  email = 'pearlpoole@gmail.com'
  product = 'free'
  
  constructor() { }

  ngOnInit(): void {
  }

}
