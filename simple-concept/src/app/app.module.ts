import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// custom created component
import { PropertyBindingComponent } from './propertyBinding/propertyBinding.component';

@NgModule({
  declarations: [AppComponent, PropertyBindingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
