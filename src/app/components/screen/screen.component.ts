import { Component } from '@angular/core';
import { CalculatorService } from 'src/app/service/calculator.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
})
export class ScreenComponent {
  constructor(public calculator: CalculatorService) {}
}
