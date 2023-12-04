import { Component } from '@angular/core';

@Component({
  selector: 'ng-switch',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <!-- <div [ngSwitch]="inputValueData">
    <div *ngSwitchCase="'Java'">You Write a Java</div>
  </div> -->
      <button onclick="">Click me</button>
    </ng-container>
  `,
  styles: [],
})
export class NgSwitchComponent {
  componentHeader = '*ngSwitch condition';
  inputValueData = 'hello';
}
