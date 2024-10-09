import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RootService } from '../Services/service/root.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'learn-ngrx';
  constructor(private _rootService: RootService) {}
  onApiCall() {
    // Direct Service call
    this._rootService.getAllUsers();
  }
}
