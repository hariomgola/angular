import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CodeLanguageComponent } from './code-language/code-language.component';
import { CodeLauguageQueryComponent } from './code-lauguage-query/code-lauguage-query.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: 'code-language', component: CodeLanguageComponent },
      { path: 'code-language/:lang/:type', component: CodeLanguageComponent },
      { path: 'code-lauguage-query', component: CodeLauguageQueryComponent },
    ],
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
