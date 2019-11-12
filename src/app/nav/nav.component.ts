import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgxNavbarCollapseComponent } from 'ngx-bootstrap-navbar';
// import { Route routerLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
