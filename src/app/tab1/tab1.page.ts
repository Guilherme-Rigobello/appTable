import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  constructor() {}

  alertButtons = ['OK'];

  meses = 0;
  taxa = 0;
  valor = 0;
  valorParcela = 0;
  valorArredondado = '';
  taxaAnualInserida = 0;
  taxaMensalDecimal = 0;
  res = '';

  calculoParcela() {
    if (this.valor <= 0 || this.meses <= 0 || this.taxa <= 0) {
      alert('Insira todas as credenciais corretamente!');
      return;
    }

    this.taxaAnualInserida = this.taxa;
    this.taxaMensalDecimal = this.taxaAnualInserida / 100 / 12;

    this.valorParcela =
      (this.valor *
        this.taxaMensalDecimal *
        Math.pow(1 + this.taxaMensalDecimal, this.meses)) /
      (Math.pow(1 + this.taxaMensalDecimal, this.meses) - 1);

    this.valorArredondado = this.valorParcela.toFixed(2);

    if (this.taxa > 20) {
      this.res = `Valor da sua parcela R$${this.valorArredondado}. Seu empréstimo é arriscado! `;
    } else {
      this.res = `Valor da sua parcela R$${this.valorArredondado}. Faça uma avaliação mais cuidadosa!`;
    }
  }
}
