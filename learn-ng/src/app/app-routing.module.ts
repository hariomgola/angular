import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Main component
import { ErrorComponent } from './error/error.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

// Routing component
import { NgIfComponent } from './Directive/ng-if.component';
import { NgIfElseComponent } from './Directive/ng-if-else.component';
import { NgSwitchComponent } from './Directive/ng-switch.component';
import { NgForComponent } from './Directive/ng-for.component';

// Data binding component
import { PropertyBindingComponent } from './data-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding.component';
import { TwoWayBindingComponent } from './data-binding/two-way-binding.component';
import { StringInterpolationComponent } from './data-binding/string-interpolation.component';

// Component communication
import { ParentCompComponent } from './component-interaction/parent-comp.component';
import { ChildCompComponent } from './component-interaction/child-comp.component';

// Routing Componet
import { RoutingParentComponent } from './Routing/routing-parent.component';
import { RoutingChildComponent } from './Routing/routing-child.component';

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
const componentInteraction = [
  {
    path: 'comp-interaction',
    component: ParentCompComponent,
  },
];
const RoutingComponent = [
  {
    path: 'routing',
    component: RoutingParentComponent,
  },
  {
    path: 'routing/:name',
    component: RoutingChildComponent,
  },
];

const routes: Routes = [
  ...landingPage,
  ...propertyBindingRoute,
  ...directivesRoute,
  ...componentInteraction,
  ...RoutingComponent,
  ...errorPage,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// custom component declaration to pass in app.module.ts for dependencies
export const ApplicationRoutingModule = [
  LandingPageComponent,
  NgIfComponent,
  NgIfElseComponent,
  NgSwitchComponent,
  NgForComponent,
  PropertyBindingComponent,
  EventBindingComponent,
  TwoWayBindingComponent,
  StringInterpolationComponent,
  ParentCompComponent,
  ChildCompComponent,
  RoutingParentComponent,
  RoutingChildComponent,
];
