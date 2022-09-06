import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UsuarioService } from './usuario.service';
import { of } from 'rxjs';

describe('UsurioService', () => {
  let service: UsuarioService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ]
        });
 httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
 service = new UsuarioService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar un arreglo de usuarios', (done: DoneFn) => {
    const mockDatos = [
      {
        username: "PruebaAdmin",
        email: "admin@mail.com",
        password: "admin",
      admin: true,
        id: 1,
       },
       {
        username: "PruebaUser",
       email: "user@mail.com",
        password: "user",
        admin: false,
        id: 2,
       },
       {
       username: "Julianne9",
       email: "jadon48@hotmail.com",
        password: "KDe8LbsDUmy6k4j",
        admin: false,
        id: 3,
       },
       {
        username: "Quinn.Purdy",
        email: "Bernie77@yahoo.com",
        password: "LHRw2LybvzJF96X",
        admin: false,
        id: 4,
       }
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerUsuario().subscribe((usuario) => {
      expect(usuario).toEqual(mockDatos);
      done();
    })
  });
});
