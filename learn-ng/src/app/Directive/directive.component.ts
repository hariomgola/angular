import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'directive',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <nav>
        <a class="button" routerLink="/ng-if">ng-if</a>
        <a class="button" routerLink="/ng-if-else">ng-if-else</a>
        <a class="button" routerLink="/ng-for">ng-for</a>
        <a class="button" routerLink="/ng-switch">ng-switch</a>
      </nav>
    </ng-container>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class DirectiveComponent implements OnInit {
  componentHeader = 'Directives in Angular';
  ngOnInit() {}
}
