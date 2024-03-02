import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TFormComponent } from './t-form/t-form.component';
import { RFormComponent } from './r-form/r-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  { path: 'template-driven-form', component: TFormComponent },
  { path: 'reactive-form', component: RFormComponent },
  { path: '**', redirectTo: '/' },
];
