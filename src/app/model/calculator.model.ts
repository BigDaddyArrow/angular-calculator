import { CalcFunction, CalcNumber } from './click.model';

export interface ICalcState {
  calcValue: CalcFunction | CalcNumber | string;
  resultValue: number;
}

export class Calculator {
  calcValue: CalcFunction | CalcNumber | string = '';
  resultValue: number = 0;

  constructor() {}

  public action(value: CalcFunction | CalcNumber) {
    this.calcValue += value;
    this.resultValue = eval(this.calcValue);
    console.log(this.resultValue);
  }
}
