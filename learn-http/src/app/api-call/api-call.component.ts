import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiCallService } from '../service/api-call.service';

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
  constructor(private apiCall: ApiCallService) {}
  onApiCallClick() {
    const _data = {
      statusCode: 200,
      InputData: {},
      OutputData: { heading: this.heading, data: this.data },
    };
    this.apiCall.postApiData(_data).subscribe({
      next: (data: any) => {
        console.log(`Api Success Response\n\n`, data);
      },
      error: (err: any) => {
        console.log('Api Error Response\n\n', err);
      },
    });
  }
}
