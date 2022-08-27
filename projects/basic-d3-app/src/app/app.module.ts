import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicDotComponent } from './basic-dot/basic-dot.component';
import { BasicSvgComponent } from './dot-svg/dot-svg.component';

@NgModule({
  declarations: [AppComponent, BasicDotComponent, BasicSvgComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
