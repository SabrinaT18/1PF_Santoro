import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
private api= environment.URLapi ;
 
  constructor(
    private http: HttpClient  ) { 
  }
  
}

