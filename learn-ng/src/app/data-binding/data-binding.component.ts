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
        <a class="button" (click)="onNavigatingRoute('string-interpolation')"
          >string-interpolation</a
        >
        <a class="button" (click)="onNavigatingRoute('property-binding')"
          >property-binding</a
        >
        <a class="button" (click)="onNavigatingRoute('event-binding')"
          >event-binding</a
        >
        <a class="button" (click)="onNavigatingRoute('two-way-binding')"
          >two-way Binding</a
        >
      </nav>
    </ng-container>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class DataBindingComponent implements OnInit {
  componentHeader = 'Data Binding';
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {}
  onNavigatingRoute(data: string) {
    this.router.navigate([`${data}`], { relativeTo: this.route });
  }
}
