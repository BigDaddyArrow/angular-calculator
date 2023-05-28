import { CommonModule } from '@angular/common';
import { NgModule, Pipe } from '@angular/core';
import { ScreenComponent } from './screen.component';
import { CalculatorService } from 'src/app/service/calculator.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ScreenComponent],
  providers: [CalculatorService],
  exports: [ScreenComponent],
})
export class ScreenModule {}
