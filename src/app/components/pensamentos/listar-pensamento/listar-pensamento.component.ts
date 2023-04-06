import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listarPensamentos = [

    {
      conteudo: 'In sed mattis dolor, quis efficitur odio. In in iaculis augue. Quisque non euismod eros, eu semper nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  ', autoria: 'Yo',
      id: 3,
      modelo: 'modelo1'

    },
    {
      conteudo: 'lailailai',
      autoria: 'Yo',
      id: 3,
      modelo: 'modelo1'

    },
  ];

}
