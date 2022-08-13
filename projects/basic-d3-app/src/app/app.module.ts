import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DotDirective } from './directives/dot.directive';
import { BasicDotComponent } from './basic-dot/basic-dot.component';

@NgModule({
  declarations: [
    AppComponent,
    DotDirective,
    BasicDotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
