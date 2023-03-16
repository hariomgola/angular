import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  isSubmitEnable: boolean = false;
  isRenderData = ['Apple', 'Samsung', 'OnePlus', 'Xiaomi'];
  constructor() {}
  componentName = 'Directive component';
  ngOnInit() {}
  onSubmitClick() {
    this.isSubmitEnable = true;
    const submitTimer = setTimeout(() => {
      this.isSubmitEnable = false;
      clearTimeout(submitTimer);
    }, 3000);
  }
}
