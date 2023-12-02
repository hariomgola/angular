import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <p>{{ componentHeader }}</p>
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
