import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento = {
    conteudo: '',
    autoria: '',
    id: 0,
    modelo: ''

  }

  larguraPensamento(): String{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
