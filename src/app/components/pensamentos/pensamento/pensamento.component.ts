import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],

})

export class PensamentoComponent {
  constructor(
    private service: PensamentoService
  ) { }
  @Input() pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    id: 0,
    modelo: '',
    favorito: false

  }
  @Input() listaFavoritos: Pensamento[] = [];

  larguraPensamento(): String {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    return this.pensamento.favorito ? 'ativo' : 'inativo'
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe(
      () => {
        this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
      }
    );
  }

}
