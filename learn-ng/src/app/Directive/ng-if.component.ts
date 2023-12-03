import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
    <p>{{ componentHeader }}</p>
    <br />
    <ng-container>
      <p *ngIf="!textBoxInputValue">Please Write something in text box</p>
      <input type="text" [(ngModel)]="textBoxInputValue" />
    </ng-container>
  `,
  styles: [],
})
export class NgIfComponent {
  componentHeader = '*ngIf condition';
  textBoxInputValue = '';
}