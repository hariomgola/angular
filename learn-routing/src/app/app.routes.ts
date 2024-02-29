import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CodeLanguageComponent } from './code-language/code-language.component';
import { CodeLauguageQueryComponent } from './code-lauguage-query/code-lauguage-query.component';
import { CodeLaunguageUrlComponent } from './code-launguage-url/code-launguage-url.component';
import { IsAuthGuard } from './services/Guard/auth-guard.service';
import { IsDeactivateGuard } from './services/Guard/deactivate-guard.service';

export const routes: Routes = [
  {
    path: '',
    canActivate: [IsAuthGuard],
    // canActivateChild: [IsAuthGuard],
    component: LandingPageComponent,
    children: [
      { path: 'code-language', component: CodeLanguageComponent },
      { path: 'code-language/:lang/:type', component: CodeLanguageComponent },
      { path: 'code-lauguage-query', component: CodeLauguageQueryComponent },
      {
        path: 'code-launguage-navigatebyurl',
        canDeactivate: [IsDeactivateGuard],
        component: CodeLaunguageUrlComponent,
        data: { data: 'Passing data from router file' },
      },
    ],
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];
