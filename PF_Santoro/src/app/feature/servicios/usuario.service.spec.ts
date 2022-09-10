import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

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
  }
  );

})


 
 
 
