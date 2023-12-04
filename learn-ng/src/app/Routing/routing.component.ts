import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'routing',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <nav>
        <a class="button" (click)="onNavigatingRoute('routing')">routing</a>
      </nav>
    </ng-container>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class RoutingComponent implements OnInit {
  componentHeader = 'Routing in Angular';
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {}
  onNavigatingRoute(data: string) {
    this.router.navigate([`${data}`], { relativeTo: this.route });
  }
}
