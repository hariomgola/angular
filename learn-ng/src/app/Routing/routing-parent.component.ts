import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-routing-parent',
  template: `
    <ng-container>
      <h5>{{ componentHeader }}</h5>
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
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    console.clear();
    console.log('|> Routing data - ', this.Language);
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('Coming from -->', params.get('name'));
    });
  }
  onButtonClick(data: string) {
    console.log('--->', data);
    // this.router.navigate(['/routing', data]);
    this.router.navigate([data], { relativeTo: this.route });
  }
}
