import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor() { }
  alertButtons = ['OK'];
  valorInvestimento = 0
  periodo = 0
  juros = 0
  valorInvestimentoArredondado = 0

  calculoInvestimento() {

  }

}
