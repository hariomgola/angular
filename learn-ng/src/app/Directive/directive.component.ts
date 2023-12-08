import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'directive',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <nav class="navigation">
        <a class="button" (click)="onNavigatingRoute('ng-if')">ng-if</a>
        <a class="button" (click)="onNavigatingRoute('ng-if-else')"
          >ng-if-else</a
        >
        <a class="button" (click)="onNavigatingRoute('ng-for')">ng-for</a>
        <a class="button" (click)="onNavigatingRoute('ng-switch')">ng-switch</a>
      </nav>
    </ng-container>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class DirectiveComponent implements OnInit {
  componentHeader = 'Directives in Angular';
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {}
  onNavigatingRoute(data: string) {
    this.router.navigate([`${data}`], { relativeTo: this.route });
  }
}
