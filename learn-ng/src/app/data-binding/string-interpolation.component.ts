import { Component } from '@angular/core';

@Component({
  selector: 'string-interpolation',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <p>{{ componentHeader }}</p>
    </ng-container>
  `,
  styles: [],
})
export class StringInterpolationComponent {
  componentHeader = 'String Interpolation';
}
