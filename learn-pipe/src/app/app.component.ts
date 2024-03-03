import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BuildInPipeComponent } from './build-in-pipe/build-in-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BuildInPipeComponent,
    CustomPipeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lean-pipe';
}
