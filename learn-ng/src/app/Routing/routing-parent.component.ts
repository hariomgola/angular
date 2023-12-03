import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-parent',
  template: `
    <ng-container>
      <p>
        {{ componentHeader }}
      </p>
    </ng-container>
    <ng-container>
      <div *ngFor="let lang of Language">
        <button (click)="onButtonClick(lang)">{{ lang }}</button>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class RoutingParentComponent implements OnInit {
  componentHeader = 'Routing Module';
  Language = ['Java', 'Python', 'JavaScript', 'Angular', 'React'];
  constructor(private router: Router) {}
  ngOnInit() {
    console.clear();
    console.log('|> Routing data - ', this.Language);
  }
  onButtonClick(data: string) {
    console.log('--->', data);
    this.router.navigate(['/routing', data]);
  }
}
