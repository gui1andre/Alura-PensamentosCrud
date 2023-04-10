import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent {

  constructor(private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute) { }

  pensamento: Pensamento = {
    id: 3,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }


  editarPensamento() {
    this.service.editarPensamento(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarPensamento']);
    });

  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.service.buscarId(parseInt(id)).subscribe((pensamento)=> {
        this.pensamento = pensamento;
      });
    }
  }



}
