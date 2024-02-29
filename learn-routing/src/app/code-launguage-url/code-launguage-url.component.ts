import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../services/Guard/deactivate-guard.service';

@Component({
  selector: 'app-code-launguage-url',
  standalone: true,
  imports: [],
  templateUrl: './code-launguage-url.component.html',
  styleUrl: './code-launguage-url.component.css',
})
export class CodeLaunguageUrlComponent implements CanComponentDeactivate {
  routerData: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      if (data) {
        this.routerData = data?.data ? data?.data : 'No Data Found.';
      }
    });
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.routerData) {
      return confirm('Do You Want to discard the changes?');
    }
    return true;
  }
}
