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
  public equalBlock: boolean = false;

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
      if (this.equalBlock) {
        this.calcValue = '';
      }
      if (value == CalcNumber.DECIMAL) {
        this.appendDecimal();
      } else {
        this.currentValue += value;
        this.calcValue += value;
      }

      this.resultValue = eval(this.calcValue);
      this.equalBlock = false;
    }
  }

  private appendFunction(value: CalcFunction) {
    if (
      [
        CalcFunction.MINUS,
        CalcFunction.MULTIPLY,
        CalcFunction.PLUS,
        CalcFunction.DIVIDE,
      ].includes(this.calcValue.slice(-1) as CalcFunction)
    ) {
      this.calcValue = this.calcValue.slice(0, -1);
    }
    if (value == CalcFunction.RESET) {
      this.calcValue = '';
      this.resultValue = 0;
      this.currentValue = '';
      this.equalBlock = false;
    } else if (value == CalcFunction.UNDO && !this.equalBlock) {
      this.currentValue = this.currentValue.slice(0, -1);
      this.calcValue = this.calcValue.slice(0, -1);
      this.equalBlock = false;
      this.resultValue = eval(this.currentValue);
    } else if (value == CalcFunction.PERCENT) {
      this.calcValue = eval(this.calcValue + '/100').toString();
      this.currentValue = this.calcValue;
      this.resultValue = eval(this.calcValue);
      this.equalBlock = false;
    } else if (value == CalcFunction.EQUAL) {
      this.calcValue = eval(this.calcValue).toString();
      this.currentValue = '';
      this.equalBlock = true;
    } else if (
      [
        CalcFunction.MINUS,
        CalcFunction.MULTIPLY,
        CalcFunction.PLUS,
        CalcFunction.DIVIDE,
      ].includes(value as CalcFunction)
    ) {
      this.currentValue = '';

      this.calcValue = eval(this.calcValue);
      this.resultValue = eval(this.calcValue);
      this.calcValue += value;
      this.equalBlock = false;
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
