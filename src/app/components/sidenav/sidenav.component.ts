import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  color = 'accent';
  checked = false;
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
