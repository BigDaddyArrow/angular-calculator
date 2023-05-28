import { Injectable } from '@angular/core';
import { Calculator } from '../model/calculator.model';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService extends Calculator {
  constructor() {
    super();
    console.log('Calculator initialized!');
  }
}
