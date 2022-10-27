import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mode-switch',
  templateUrl: './mode-switch.component.html',
  styleUrls: ['./mode-switch.component.scss']
})
export class ModeSwitchComponent implements OnInit {

  checked = false
  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.checked = !this.checked
    console.log(this.checked)
  }
}
