import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-code-launguage-url',
  standalone: true,
  imports: [],
  templateUrl: './code-launguage-url.component.html',
  styleUrl: './code-launguage-url.component.css',
})
export class CodeLaunguageUrlComponent {
  routerData: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      if (data) {
        this.routerData = data?.data ? data?.data : 'No Data Found.';
      }
    });
  }
}
