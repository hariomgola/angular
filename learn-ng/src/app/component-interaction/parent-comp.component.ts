import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-comp',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <p>{{ dataFromChildComponent }}</p>
      <p>{{ _dataFromChildComponent }}</p>
    </ng-container>
    <ng-container>
      <child-comp
        [masterData]="name"
        [Mdata]="privateName"
        (outputMasterData)="outputFunction($event)"
        (OmData)="outputPrivateFunction($event)"
      ></child-comp>
    </ng-container>
  `,
  styles: [],
})
export class ParentCompComponent implements OnInit {
  dataFromChildComponent = '';
  _dataFromChildComponent = '';
  componentHeader = 'Parent Component';
  name = '';
  privateName = '';
  ngOnInit() {
    setTimeout(() => {
      (this.name = 'Hari'), (this.privateName = 'Aman');
    }, 2000);
  }
  outputFunction(event: any) {
    this.dataFromChildComponent = event?.data;
    setTimeout(() => {
      this.dataFromChildComponent = '';
    }, 3000);
  }
  outputPrivateFunction(event: any) {
    this._dataFromChildComponent = event?.data;
    setTimeout(() => {
      this._dataFromChildComponent = '';
    }, 3000);
  }
}
