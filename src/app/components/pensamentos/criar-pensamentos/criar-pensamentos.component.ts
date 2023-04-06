import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento = {
    id: 1,
    conteudo: 'Treinando Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }


  constructor() { }

  ngOnInit() {
  }

  criarPensamento(){

  }
  cancelar() {
    throw new Error('Method not implemented.');
    }


}
