import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContainerModule } from './components/calc-container/calc-container.module';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContainerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
