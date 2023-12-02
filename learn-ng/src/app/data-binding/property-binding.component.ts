import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>{{ componentHeader }}</p>
    <ng-container>
      <p>{{ componentName }}</p>
      <p>{{ 2 + 2 }}</p>
    </ng-container>
  `,
  styles: [],
})
export class PropertyBindingComponent {
  componentHeader = 'Property Binding';
  // property binding concept
  componentName = 'Property binding';
}
