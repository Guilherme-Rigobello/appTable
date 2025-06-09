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
  valorInvestimentoFinal = 0;
  r = 0;
  t = 0;
  montante = 0;
  res = ''

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

    if(this.retorno > 15){
    this.res = `⚠️ Provável investimento de alto risco ⚠️. Montante Final: R$${this.valorInvestimentoArredondado}`
    } else if (this.retorno < 15) {
       this.res = `🔐 Invista em renda fixa ou cdb's . Montante Final: R$${this.valorInvestimentoArredondado}`
    } else {
       this.res = `Não é possível calcular o seu investimento.`
    }

  }
}
