import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  constructor() {}
  alertButtons = ['OK'];
  valorInvestimento = 0;
  periodo = 0;
  retorno = 0;
  valorInvestimentoArredondado = '';
  valorLiquidoArredondado = '';
  valorInvestimentoFinal = 0;
  r = 0;
  t = 0;
  montante = 0;
  liquido = 0;

  calculoInvestimento() {
    if (this.valorInvestimento <= 0 || this.periodo <= 0 || this.retorno <= 0) {
      alert('Preencha todos os campos corretamente!');
      return;
    }
    this.r = this.retorno / 100;
    this.t = this.periodo;

    this.montante = this.valorInvestimento * Math.pow(1 + this.r, this.t);

    this.valorInvestimentoFinal = this.montante;
    this.valorInvestimentoArredondado = this.valorInvestimentoFinal.toFixed(2);

    this.liquido = this.montante - this.valorInvestimento;
    this.valorLiquidoArredondado = this.liquido.toFixed(2);
  }
}
