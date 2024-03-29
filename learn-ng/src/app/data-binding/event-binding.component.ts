import { Component } from '@angular/core';

@Component({
  selector: 'event-binding',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <input type="text" (input)="onInputTextFunction($event)" />
      <button (click)="onButtonClick()">Event Binding</button>
    </ng-container>
  `,
  styles: [],
})
export class EventBindingComponent {
  componentHeader = 'Event Binding';
  onInputTextFunction(event: Event) {
    const inputValue = (<HTMLTextAreaElement>event.target)?.value;
    console.log('-> ', inputValue);
  }
  onButtonClick() {
    console.log('|> Button is clicked due to event binding');
  }
}
