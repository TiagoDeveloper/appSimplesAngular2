import { Component, OnInit, Input } from '@angular/core';
import { PessoasService } from '../pessoas/pessoas.service';
import { Pessoa } from '../pessoas/pessoa';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  persona: Array<Pessoa>;

  constructor(private pessoas :PessoasService) { }

  ngOnInit() {

    this.persona = this.pessoas.getPessoas();
    
  }

  mostrar() {

  }


}
