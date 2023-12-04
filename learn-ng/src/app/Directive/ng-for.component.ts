import { Component } from '@angular/core';

@Component({
  selector: 'ng-for',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
    </ng-container>
    <ng-container>
      <div *ngFor="let prgLanguage of programmingLanguage; index as i">
        {{ prgLanguage.type }}
      </div>
    </ng-container>
  `,
  styles: [],
})
export class NgForComponent {
  componentHeader = '*ngFor condition';
  programmingLanguage = [
    {
      Language: 'Java',
      type: 'BackEnd',
    },
    {
      Language: 'python',
      type: 'BackEnd',
    },
    {
      Language: 'node',
      type: 'BackEnd',
    },
    {
      Language: 'Angular',
      type: 'FrontEnd',
    },
    {
      Language: 'React',
      type: 'FrontEnd',
    },
    {
      Language: 'JavaScript',
      type: 'FrontEnd',
    },
  ];
}
