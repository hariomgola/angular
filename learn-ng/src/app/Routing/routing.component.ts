import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'routing',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <nav>
        <a class="button" routerLink="/routing">routing</a>
      </nav>
    </ng-container>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class RoutingComponent implements OnInit {
  componentHeader = 'Routing in Angular';
  ngOnInit() {}
}
