import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  constructor() { }

  alertButtons = ['OK'];

  meses = 0;
  taxa = 0;
  valor = 0;
  valorParcela = 0;
  valorArredondado = ''
  res = '';

  calculoParcela() {
    this.taxa = this.taxa / 100
    this.valorParcela =
      (this.valor * this.taxa) / 1 - (1 + this.taxa) ** (-1 * this.meses);

    this.valorArredondado = this.valorParcela.toFixed(2)

    if (this.taxa > 20) {
      this.res = `Seu empréstimo é arriscado! `;
    }
    else (this.res = `Faça uma avaliação mais cuidadosa!`);
  }
}
