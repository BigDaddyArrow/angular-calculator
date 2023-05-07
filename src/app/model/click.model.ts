import { CalcFunction } from './function.model';
import { CalcNumber } from './number.model';

export enum ClickType {
  FUNCTION = 'FUNCTION',
  NUMBER = 'NUMBER',
}

export interface ClickValue {
  value: CalcFunction | CalcNumber;
  type: ClickType;
}
