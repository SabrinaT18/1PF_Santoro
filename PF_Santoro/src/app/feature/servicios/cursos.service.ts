import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cursos } from '../Model/Cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
 private api: string = environment.api ;
  
  constructor(
    private http: HttpClient
  ) {  }
  
  obtenerCursos(): Observable<Cursos[]> {
   return this.http.get<Cursos[]>(`${this.api}/Cursos`); 
  }
      
  AgregarCurso(curso: Cursos){
    return this.http.post<Cursos>(`${this.api}/Cursos`, curso); 
    }

  EditarCurso(curso: Cursos){
  return this.http.put<Cursos>(`${this.api}/Cursos/${curso.id}`, curso); 
  }
  
  BorrarCurso(id: string){
    return this.http.delete<Cursos>(`${this.api}/Cursos/${id}`); 
    }
  }
  