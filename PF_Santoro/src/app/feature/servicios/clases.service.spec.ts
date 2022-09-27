import { TestBed } from '@angular/core/testing';

import { ClasesService } from './clases.service';

describe('ClasesService', () => {
  let service: ClasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
    service = new ClasesService();
  });

  it('se crea', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar arreglo de clases', (done: DoneFn) => {
    const mockDatos = [
      { id: 1, ClaseNum: 1, tema: 'Introducción', fecha: 'xxxxx' },
      { id: 2, ClaseNum: 2, tema: 'a designar', fecha: 'xxxxx' },
      { id: 3, ClaseNum: 3, tema: 'a designar', fecha: 'xxxxx' },
      { id: 4, ClaseNum: 4, tema: 'a designar', fecha: 'xxxxx' },
      { id: 5, ClaseNum: 5, tema: 'a designar', fecha: 'xxxxx' },
    ];

    service.obtenerObservableClases().subscribe((Clases) => {
      expect(Clases).toEqual(mockDatos);
      done();
    })
  });

});
