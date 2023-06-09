import { Component } from '@angular/core';
import { CalcBase, getClickSort } from 'src/app/model/click.model';
import { CalculatorService } from 'src/app/service/calculator.service';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
})
export class NumpadComponent {
  protected buttons = getClickSort();
  constructor(public calculator: CalculatorService) {}

  protected calcAction(button: CalcBase) {
    this.calculator.action(button);
  }
}
