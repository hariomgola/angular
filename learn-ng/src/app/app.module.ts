import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Working component
import { TwoWayBindingComponent } from './data-binding/two-way-binding.component';
import { NgIfComponent } from './Directive/ng-if.component';
import { NgIfElseComponent } from './Directive/ng-if-else.component';
import { ChildCompComponent } from './component-interaction/child-comp/child-comp.component';
import { ParentCompComponent } from './component-interaction/parent-comp/parent-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgIfElseComponent,
    ChildCompComponent,
    ParentCompComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
