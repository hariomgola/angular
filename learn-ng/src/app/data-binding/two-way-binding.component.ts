import { Component } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <input type="text" [(ngModel)]="textBoxValue" />
      <p>{{ textBoxValue }}</p>
    </ng-container>
  `,
  styles: [],
})
export class TwoWayBindingComponent {
  componentHeader = 'Two Way Binding';
  textBoxValue = '';
}
