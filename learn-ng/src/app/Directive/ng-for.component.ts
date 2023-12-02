import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
    <p>{{ componentHeader }}</p>
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
