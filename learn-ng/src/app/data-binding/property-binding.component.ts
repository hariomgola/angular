import { Component } from '@angular/core';

@Component({
  selector: 'property-binding',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <input type="text" [disabled]="buttonDisabled" />
    </ng-container>
  `,
  styles: [],
})
export class PropertyBindingComponent {
  componentHeader = 'Property Binding';
  // property binding concept
  componentName = 'Property binding';
  buttonDisabled = true;
}
