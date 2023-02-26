import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  componentRenederData = {
    appComponent: false,
    propertyBindingComponent: false,
    directiveComponent: true,
  };
  componentName = 'app root';
  inputData = 'input-Text';
}
