import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Main component
import { ErrorComponent } from './error/error.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

// Main Component
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './Directive/directive.component';
import { RoutingComponent } from './Routing/routing.component';

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

// Component LifeCycle
import { ParentLifecycleComponent } from './component-lifecycle/parent-lifecycle.component';
import { ChildLifecycleComponent } from './component-lifecycle/child-lifecycle.component';

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
const DataBindingRoutes = [
  {
    path: 'string-interpolation',
    component: StringInterpolationComponent,
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent,
  },
  {
    path: 'event-binding',
    component: EventBindingComponent,
  },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
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
const componentInteractionRoutes = [
  {
    path: 'parent',
    component: ParentCompComponent,
  },
  {
    path: 'child',
    component: ChildCompComponent,
  },
];
const RoutingComponentRoute = [
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
  {
    path: 'data-binding',
    component: DataBindingComponent,
    children: DataBindingRoutes,
  },
  {
    path: 'directive',
    component: DirectiveComponent,
    children: directivesRoute,
  },
  {
    path: 'component-interaction',
    component: ComponentInteractionComponent,
    children: componentInteractionRoutes,
  },
  {
    path: 'route',
    component: RoutingComponent,
    children: RoutingComponentRoute,
  },
  {
    path: 'lifecycle',
    component: ParentLifecycleComponent,
  },
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
  DirectiveComponent,
  NgIfComponent,
  NgIfElseComponent,
  NgSwitchComponent,
  NgForComponent,
  DataBindingComponent,
  PropertyBindingComponent,
  EventBindingComponent,
  TwoWayBindingComponent,
  StringInterpolationComponent,
  ComponentInteractionComponent,
  ParentCompComponent,
  ChildCompComponent,
  ParentLifecycleComponent,
  ChildLifecycleComponent,
  RoutingComponent,
  RoutingParentComponent,
  RoutingChildComponent,
];
