import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  constructor(readonly router: Router, private route: ActivatedRoute) {}
  onButtonClick(data: string) {
    if (data == 'template') {
      this.router.navigate(['/template-driven-form']);
    } else if (data == 'reactive') {
      this.router.navigate(['/reactive-form']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
