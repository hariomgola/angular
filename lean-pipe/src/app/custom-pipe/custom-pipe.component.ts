import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ShortPipe } from '../pipe/short.pipe';
import { FilterPipe } from '../pipe/filter.pipe';

@Component({
  selector: 'custom-pipe',
  standalone: true,
  imports: [NgFor, ShortPipe, FilterPipe],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css',
})
export class CustomPipeComponent {
  someData = 'Angulardata';
  deviceData = [
    {
      name: 'Iphone',
      value: 20,
    },
    {
      name: 'Samsung',
      value: 10,
    },
    {
      name: 'Macbook',
      value: 2,
    },
    {
      name: 'Laptop',
      value: 12,
    },
    {
      name: 'mac',
      value: 1,
    },
    {
      name: 'Ear buds',
      value: 30,
    },
  ];
}
