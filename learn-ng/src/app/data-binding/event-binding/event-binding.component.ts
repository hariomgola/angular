import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
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
