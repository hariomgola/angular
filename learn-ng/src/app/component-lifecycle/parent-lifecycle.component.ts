import { Component } from '@angular/core';

@Component({
  selector: 'parent-lifecycle',
  template: `<child-lifecycle [parentCounter]="counter">
    <p
      betterHighlighter
      [defaultColor]="'orange'"
      [highlightedColor]="'yellow'"
    >
      This Tag is from parent Lifecycle Component
    </p>
  </child-lifecycle> `,
})
export class ParentLifecycleComponent {
  counter = 0;
  constructor() {
    this.selfCallingFunction();
  }
  selfCallingFunction() {
    setTimeout(() => {
      console.log('=-=-=-=--> Parent Data is changing <--=-=-=-=');
      this.counter += 1;
      this.selfCallingFunction();
    }, 1000);
  }
}
