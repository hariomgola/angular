import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './data-binding/two-way-binding/two-way-binding.component';
import { NgIfComponent } from './Directive/ng-if/ng-if.component';
import { NgIfElseComponent } from './Directive/ng-if-else/ng-if-else.component';

@NgModule({
  declarations: [AppComponent, TwoWayBindingComponent, NgIfComponent,NgIfElseComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
