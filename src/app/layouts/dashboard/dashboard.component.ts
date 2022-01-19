import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public isCollapsed = false;
  public collapsedWidth = 80;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    event.target.innerWidth;
    if (event.target.innerWidth < 1200) {
      this.collapsedWidth = 0;
    } else {
      this.collapsedWidth = 80;
    }
  }

  constructor() {}
}
