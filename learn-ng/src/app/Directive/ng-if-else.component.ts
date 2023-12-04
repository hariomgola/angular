import { Component } from '@angular/core';

@Component({
  selector: 'ng-if-else',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <p *ngIf="textBoxInputValue == ''; else valueAddedField">
        Please Write something in text box
      </p>
      <input type="text" [(ngModel)]="textBoxInputValue" />
    </ng-container>
    <ng-template #valueAddedField>
      <p>{{ textBoxInputValue }}</p>
    </ng-template>
  `,
  styles: [],
})
export class NgIfElseComponent {
  componentHeader = '*ng if Else condition';
  textBoxInputValue = '';
}
