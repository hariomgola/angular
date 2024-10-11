import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RootService } from '../Services/service/root.service';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'learn-ngrx';
  userData: any;

  constructor(private _rootService: RootService) {}

  onApiCall() {
    // Direct Service call
    this._rootService.getApiCall('users').subscribe((data) => {
      this.userData = data;
    });
  }
}
