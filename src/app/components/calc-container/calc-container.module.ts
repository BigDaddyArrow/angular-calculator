import { NgModule } from '@angular/core';
import { ContainerComponent } from './calc-container.component';
import { CommonModule } from '@angular/common';
import { NumpadModule } from '../numpad/numpad.module';
import { ScreenModule } from '../screen/screen.module';
import { TestComponent } from '../test/test.component';
import { CalculatorService } from 'src/app/service/calculator.service';

@NgModule({
  imports: [CommonModule, NumpadModule, ScreenModule],
  declarations: [ContainerComponent, TestComponent],
  providers: [CalculatorService],
  exports: [ContainerComponent],
})
export class ContainerModule {}
