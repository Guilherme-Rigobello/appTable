import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IDespesa } from '../model/IDespesa';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  rendaMensal = 3000;

  despesas: IDespesa = {
    moradia: 0,
    alimentacao: 0,
    transporte: 0,
    lazer: 0,
  };

  mensagem = '';
  total = 0;
  alertButtons = ['OK'];

  calcular() {
    this.total =
      this.despesas.moradia +
      this.despesas.alimentacao +
      this.despesas.transporte +
      this.despesas.lazer;

    if (this.total > this.rendaMensal) {
      this.mensagem = `Total de despesas: R$ ${this.total} Suas despesas superam a renda. Reduza lazer ou transporte.`;
    } else {
      this.mensagem = `Você está dentro do orçamento. Suas despesas: R$${this.total}`;
    }
  }
}
