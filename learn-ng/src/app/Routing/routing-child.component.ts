import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-child',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <h5>
        {{ language }}
      </h5>
      <h5>
        You have Selected {{ language }} language and Data is passed through
        Routing
      </h5>
      <div>
        <button (click)="goToPreviousComponent()">Back</button>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class RoutingChildComponent implements OnInit {
  componentHeader = 'Routing Child component';
  language: string | null = '';
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    // simple mechanism
    // this.language = this.route.snapshot.paramMap.get('name');
    // observable mechanism
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.language = params.get('name');
    });
  }
  goToPreviousComponent() {
    this.router.navigate(['/routing', { name: this.language }]);
  }
}
