import { Component } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './propertyBinding.component.html',
  styleUrls: ['./propertyBinding.component.css'],
})
export class PropertyBindingComponent {
  constructor() {
    let timeTimer = setTimeout(() => {
      console.warn('>> Now the button will enable');
      this.isSetProperty = true;
      clearTimeout(timeTimer);
    }, 5000);
  }
  /**
   * Property binding values
   */
  // string interpolation
  componentName = 'property Binding';
  // property binding
  isSetProperty = false;
  // Eveny Binding
  displayMessage = 'Empty!!';

  /**
   * Function will be start from here
   */
  ngOnInit() {}
  onButtonClick() {
    this.displayMessage = 'Button is clicked';
  }
}
