import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
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
