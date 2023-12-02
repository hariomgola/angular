import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  template: `
    <p>{{ componentHeader }}</p>
    <ng-container>
      <p>{{ componentHeader }}</p>
    </ng-container>
  `,
  styles: [],
})
export class StringInterpolationComponent {
  componentHeader = 'String Interpolation';
}
