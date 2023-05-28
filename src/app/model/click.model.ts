export enum CalcFunction {
  NO_FUNCTION = '',
  PLUS = '+',
  MINUS = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
  PERCENT = '%',
  RESET = 'c',
  UNDO = '⎌',
  EQUAL = '=',
}

export enum CalcNumber {
  NO_VALUE = '',
  ZERO = '0',
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  DECIMAL = '.',
}

export type CalcBase = CalcNumber | CalcFunction;

// The order in which the symbols appear in the numpad
export function getClickSort(): Array<CalcBase> {
  return [
    CalcFunction.RESET,
    CalcFunction.UNDO,
    CalcFunction.PERCENT,
    CalcFunction.DIVIDE,
    CalcNumber.SEVEN,
    CalcNumber.EIGHT,
    CalcNumber.NINE,
    CalcFunction.MULTIPLY,
    CalcNumber.FOUR,
    CalcNumber.FIVE,
    CalcNumber.SIX,
    CalcFunction.MINUS,
    CalcNumber.ONE,
    CalcNumber.TWO,
    CalcNumber.THREE,
    CalcFunction.PLUS,
    CalcNumber.ZERO,
    CalcNumber.DECIMAL,
    CalcFunction.EQUAL,
  ];
}
