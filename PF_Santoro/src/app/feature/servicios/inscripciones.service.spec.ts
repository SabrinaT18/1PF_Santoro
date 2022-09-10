import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { InscripcionesService } from './inscripciones.service';
import { Inscripciones } from '../Model/Inscripciones';
import { of } from 'rxjs';

describe('InscripcionesService', () => {
  let service: InscripcionesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({     
      imports:  [
      HttpClientTestingModule
    ]
  });
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  service = new InscripcionesService (httpClientSpy as any);
  });

  it('se crea', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar arreglo de inscripciones mokapi', (done: DoneFn) => {
    const mockDatos =   [   
      {
        nombreAlumno: "Macy",
        ApellidoAlumno: "Hegmann",
        NombreCurso: "InnoDB",
        comision: "55831",
        idAlumno: 11,
        idCurso: 13,
        id: 2
       },
       {
        nombreAlumno: "Benedict",
        ApellidoAlumno: "Corkery",
        NombreCurso: "CSV",
       comision: "94652-1659",
        idAlumno: 76,
        idCurso: 53,
        id: 3,
       },
       {
        nombreAlumno: "Stacy",
        ApellidoAlumno: "Macejkovic",
        NombreCurso: "CSV",
        comision: "83177-5884",
        idAlumno: 47,
        idCurso: 14,
        id: 4,
       },
       {
        nombreAlumno: "Jakayla",
        ApellidoAlumno: "Will",
        NombreCurso: "InnoDB",
        comision: "45322-7208",
        idAlumno: 49,
        idCurso: 14,
        id: 5,
       },
       {
        nombreAlumno: "Constance",
        ApellidoAlumno: "Hamill",
        NombreCurso: "MEMORY",
        comision: "28936",
        idAlumno: 26,
        idCurso: 56,
        id: 6,
       },
       {
        nombreAlumno: "Willis",
        ApellidoAlumno: "Davis",
        NombreCurso: "InnoDB",
        comision: "63440-1233",
        idAlumno: 81,
        idCurso: 99,
        id: 7,
       },
       {
        nombreAlumno: "Elena",
        ApellidoAlumno: "Runolfsson",
        NombreCurso: "InnoDB",
        comision: "89745-7943",
        idAlumno: 63,
        idCurso: 66,
        id: 8,
       },
       {
        nombreAlumno: "Remington",
        ApellidoAlumno: "Towne",
        NombreCurso: "MyISAM",
        comision: "40357-7840",
        idAlumno: 97,
        idCurso: 54,
        id: 9,
       },
       {
        nombreAlumno: "Lura",
        ApellidoAlumno: "Nicolas",
        NombreCurso: "MEMORY",
        comision: "27507",
        idAlumno: 41,
        idCurso: 87,
        id: 10,
       },
       {
        nombreAlumno: "Camilla",
        ApellidoAlumno: "Williamson",
        NombreCurso: "InnoDB",
        comision: "90303-0954",
        idAlumno: 98,
        idCurso: 46,
        id: 11,
       }

           ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerInscripciones().subscribe((Inscripciones) => {
      expect(Inscripciones).toEqual(mockDatos);
      done();
    })
  });

});