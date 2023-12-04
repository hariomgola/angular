import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'component-interaction',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <div>
        <nav>
          <a class="button" routerLink="/parent">parent component</a>
          <a class="button" routerLink="/parent">child component</a>
        </nav>
      </div>
    </ng-container>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class ComponentInteractionComponent implements OnInit {
  componentHeader = 'Component Interaction';
  ngOnInit() {}
}
