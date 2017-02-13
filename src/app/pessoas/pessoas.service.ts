import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';

@Injectable()
export class PessoasService {

  pessoas: Array<Pessoa> = [];

  constructor() { 

    this.pessoas.push(new Pessoa('Michelle',25));
    this.pessoas.push(new Pessoa('Claudio',58));
    this.pessoas.push(new Pessoa('Lucas',21));
    this.pessoas.push(new Pessoa('Tania',54));

  }

  getPessoas() {
    return this.pessoas;
  }

}
