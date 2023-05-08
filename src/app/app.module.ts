import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumpadComponent } from './components/numpad/numpad.component';
import { ScreenComponent } from './components/screen/screen.component';
import { CalcContainerComponent } from './components/calc-container/calc-container.component';

@NgModule({
  declarations: [AppComponent, NumpadComponent, ScreenComponent, CalcContainerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
