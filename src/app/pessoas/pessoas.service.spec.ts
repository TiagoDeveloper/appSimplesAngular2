/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PessoasService } from './pessoas.service';

describe('PessoasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PessoasService]
    });
  });

  it('should ...', inject([PessoasService], (service: PessoasService) => {
    expect(service).toBeTruthy();
  }));
});
