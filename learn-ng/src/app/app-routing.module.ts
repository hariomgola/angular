import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Main component
import { ErrorComponent } from './error/error.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

// Routing component
import { DirectiveComponent } from './Directive/directive.component';
import { NgIfComponent } from './Directive/ng-if/ng-if.component';
import { NgIfElseComponent } from './Directive/ng-if-else/ng-if-else.component';
import { NgSwitchComponent } from './Directive/ng-switch/ng-switch.component';
import { NgForComponent } from './Directive/ng-for/ng-for.component';
import { StringInterpolationComponent } from './data-binding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './data-binding/two-way-binding/two-way-binding.component';

const landingPage = [{ path: '', component: LandingPageComponent }];
const errorPage = [
  {
    path: '**',
    component: ErrorComponent,
  },
];
const propertyBindingRoute = [
  {
    path: 'string-interpolation',
    component: StringInterpolationComponent,
  },
  {
    path: 'propertyBinding',
    component: PropertyBindingComponent,
  },
  {
    path: 'eventBinding',
    component: EventBindingComponent,
  },
  { path: 'twoway-Binding', component: TwoWayBindingComponent },
];
const directivesRoute = [
  {
    path: 'ng-if',
    component: NgIfComponent,
  },
  {
    path: 'ng-if-else',
    component: NgIfElseComponent,
  },
  {
    path: 'ng-switch',
    component: NgSwitchComponent,
  },
  {
    path: 'ng-for',
    component: NgForComponent,
  },
];

const routes: Routes = [
  ...landingPage,
  ...propertyBindingRoute,
  ...directivesRoute,
  ...errorPage,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
