import { NgModule } from '@angular/core';
import { NumpadComponent } from './numpad.component';
import { CommonModule } from '@angular/common';
import { CalculatorService } from 'src/app/service/calculator.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NumpadComponent],
  providers: [CalculatorService],
  exports: [NumpadComponent],
})
export class NumpadModule {}
