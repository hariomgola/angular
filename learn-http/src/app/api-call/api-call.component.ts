import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'api-call',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './api-call.component.html',
  styleUrl: './api-call.component.css',
})
export class ApiCallComponent {
  heading = '';
  data = '';
  onApiCallClick() {
    const _data = {
      heading: this.heading,
      data: this.data,
    };
  }
}
