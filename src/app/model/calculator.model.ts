import { CalcFunction, CalcNumber } from './click.model';

export interface ICalcState {
  currentNumber: CalcNumber | string;
  currentFunction: CalcFunction;
  firstValue: string;
  secondValue: string;
  calculatedValue: number;
}

export const InitialCalcState: ICalcState = {
  currentNumber: CalcNumber.NO_VALUE,
  currentFunction: CalcFunction.NO_FUNCTION,
  firstValue: '',
  secondValue: '',
  calculatedValue: 0,
};

export class Calculator {
  public state: ICalcState;
  constructor() {
    this.state = InitialCalcState;
  }

  public addNumber(value: string) {}

  private equal() {
    this.state.firstValue = '';
    this.state.secondValue = '';
    this.state.currentFunction = CalcFunction.NO_FUNCTION;
  }

  private reset() {
    this.state = InitialCalcState;
  }

  get currentNumber(): CalcNumber | string {
    return this.state.currentNumber;
  }

  get currentFunction(): CalcFunction {
    return this.state.currentFunction;
  }

  get firstValue(): string {
    return this.state.firstValue;
  }

  get secondValue(): string {
    return this.state.secondValue;
  }

  get calculatedValue(): number {
    return this.state.calculatedValue;
  }
}
