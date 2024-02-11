import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  AppRoutingModule,
  ApplicationRoutingModule,
} from './app-routing.module';
import { AppComponent } from './app.component';

import { highlightingDirective } from './component-directives/highlighting.directive';
import { BetterHighlighterDirective } from './component-directives/betterHighlighter.directive';
import { UnlessDirective } from './component-directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationRoutingModule,
    highlightingDirective,
    BetterHighlighterDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
