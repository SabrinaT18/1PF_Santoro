import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CursosService } from './cursos.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('CursosService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: CursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CursosService (httpClientSpy as any);
  });

  it('se crea', () => {
    expect(service).toBeTruthy();
  });
  
  it('Debe retornar arreglo de cursos mokapi', (done: DoneFn) => {
    const mockDatos = [
      {
       materia: "BLACKHOLE",
      comision: "55969-5713",
        profesor: "Weimann",
        fechaInicio: "2022-09-01",
        id: 2
       },
       {
        materia: "MEMORY",
        comision: "66709-2410",
        profesor: "Koch",
        fechaInicio: "2022-09-01",
        id: 4
       },
       {
        materia: "CSV",
       comision: "02638",
        profesor: "Stroman",
        fechaInicio: "2022-09-01",
        id: 5
       },
       {
        materia: "BLACKHOLE",
        comision: "84336",
        profesor: "Padberg",
        fechaInicio: "2022-09-01",
        id: 6
       },
       {
        materia: "MEMORY",
        comision: "53470-7379",
        profesor: "Mitchell",
        fechaInicio: "2022-09-01",
       id: 7
       },
       {
        materia: "ARCHIVE",
       comision: "63072-8824",
        profesor: "Hamill",
       fechaInicio: "2022-09-01",
        id: 8,
       }
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerCursos().subscribe((cursos) => {
      expect(cursos).toEqual(mockDatos);
      done();
    })
  });


});
