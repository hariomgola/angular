import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  onNavigatingRoute(data: string) {
    this.router.navigate([`/${data}`]);
  }
}
