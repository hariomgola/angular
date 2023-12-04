import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'data-binding',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <nav>
        <a class="button" routerLink="/string-interpolation"
          >string-interpolation</a
        >
        <a class="button" routerLink="/propertyBinding">property-binding</a>
        <a class="button" routerLink="/eventBinding">event-binding</a>
        <a class="button" routerLink="/twoway-Binding">two-way Binding</a>
      </nav>
    </ng-container>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class DataBindingComponent implements OnInit {
  componentHeader = 'Data Binding';
  ngOnInit() {}
}
