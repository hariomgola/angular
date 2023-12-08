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
        <nav class="navigation">
          <a class="button" (click)="onNavigatingRoute('parent')"
            >parent component</a
          >
          <a class="button" (click)="onNavigatingRoute('child')"
            >child component</a
          >
        </nav>
      </div>
    </ng-container>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class ComponentInteractionComponent implements OnInit {
  componentHeader = 'Component Interaction';
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {}
  onNavigatingRoute(data: string) {
    this.router.navigate([`${data}`], { relativeTo: this.route });
  }
}
