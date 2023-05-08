import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  calValue: number = 0;
  funcT: any = '';
  calNumber: string = '';
  firstNumber: number = 0;
  secondNumber: number = 0;
  numPad: Array<String>;

  constructor() {
    this.numPad = [];
  }

  onClickValue(val: string, type: any) {
    if (type === 'number') {
      this.onNumberClick(val);
    } else if (type === 'function') {
      this.onFunctionClick(val);
    }
  }

  private clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = '';
    this.calNumber = '';
  }

  private onNumberClick(val: string) {
    // if (this.calNumber != '') {
    //   this.calNumber = this.calNumber + val;
    // } else {
    //   this.calNumber = val;
    // }
    this.calNumber += val;

    this.calValue = parseFloat(this.calNumber);
  }

  private onFunctionClick(val: string) {
    if (val === 'c') {
      this.clearAll();
      return;
    }

    if (this.funcT === '') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = '';
      this.funcT = val;
    } else if (this.funcT !== '') {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }

  private valueCalculate(operator: string) {
    let total = eval(this.firstNumber + this.funcT + this.secondNumber);
    this.totalAssignValues(total, operator);
    if (operator === '=') {
      this.onEqualPress();
    }
  }

  private totalAssignValues(total: number, val: string) {
    this.calValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
  }

  private onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = '';
  }
}
