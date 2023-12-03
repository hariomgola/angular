import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-child',
  template: `
    <ng-container>
      <p>
        {{ componentHeader }}
      </p>
    </ng-container>
    <ng-container>
      <h5>
        {{ language }}
      </h5>
      <h5>
        You have Selected {{ language }} language and Data is passed through
        Routing
      </h5>
    </ng-container>
  `,
  styles: [],
})
export class RoutingChildComponent implements OnInit {
  componentHeader = 'Routing Child component';
  language: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.language = this.route.snapshot.paramMap.get('name');
  }
}
