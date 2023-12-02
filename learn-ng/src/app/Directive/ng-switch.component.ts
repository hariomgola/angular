import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
    <ng-container>
      <p>{{ componentHeader }}</p>
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
