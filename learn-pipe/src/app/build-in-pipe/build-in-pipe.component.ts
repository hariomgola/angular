import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  PercentPipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'build-in-pipe',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
  ],
  templateUrl: './build-in-pipe.component.html',
  styleUrl: './build-in-pipe.component.css',
})
export class BuildInPipeComponent {
  someData = 'Hi I am from build in pipe';
  dateData = new Date();
}
