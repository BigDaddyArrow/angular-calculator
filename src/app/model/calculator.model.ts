import { CalcBase, CalcNumber, CalcFunction } from './click.model';

export interface ICalcState {
  CalcBase: CalcBase | string;
  resultValue: number;
}

export class Calculator {
  readonly MAX_VALUE_SIZE: number = 16;

  public calcValue: CalcBase | string = '';
  public resultValue: number = 0;
  private currentValue: string = '';

  constructor() {}

  public action(value: CalcBase) {
    if (Object.values(CalcNumber).includes(value as CalcNumber)) {
      this.appendNumber(value as CalcNumber);
    }
    if (Object.values(CalcFunction).includes(value as CalcFunction)) {
      this.appendFunction(value as CalcFunction);
    }
  }

  private appendNumber(value: CalcNumber) {
    if (this.currentValue.length < this.MAX_VALUE_SIZE) {
      if (value == CalcNumber.DECIMAL) {
        this.appendDecimal();
      } else {
        this.currentValue += value;
        this.calcValue += value;
      }
      console.log('calcValue: ', this.calcValue);
      console.log('currentValue: ', this.currentValue);

      this.resultValue = eval(this.currentValue);
    }
  }

  private appendFunction(value: CalcFunction) {
    if (value == CalcFunction.RESET) {
      this.calcValue = '';
      this.resultValue = 0;
      this.currentValue = '';
    }
  }

  private appendDecimal() {
    if (!this.currentValue.includes(CalcNumber.DECIMAL)) {
      if (this.currentValue == '') {
        this.currentValue = CalcNumber.ZERO + CalcNumber.DECIMAL;
        this.calcValue += this.currentValue;
      } else {
        this.currentValue += CalcNumber.DECIMAL;
        this.calcValue += CalcNumber.DECIMAL;
      }
    }
  }
}
