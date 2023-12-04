import { Component } from '@angular/core';

@Component({
  selector: 'ng-if',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
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
