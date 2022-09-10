import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cursos } from '../Model/Cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
 private api = environment.URLapi ;
 cursoSubject = new Subject<any>();

 
  constructor(
    private http: HttpClient
    
    ) {  }
  
  obtenerCursos(): Observable<Cursos[]> {
   return this.http.get<Cursos[]>(`${this.api}/Cursos`); 
  }
      
  AgregarCurso(curso: Cursos){
    return this.http.post<Cursos>(`${this.api}/Cursos`, curso).pipe(tap({
        next: (curso) => this.cursoSubject.next(curso),
      })
    );
    }

  EditarCurso(curso: Cursos){
  return this.http.put<Cursos>(`${this.api}/Cursos/${curso.id}`, curso).pipe(    
    tap({
      next: () => this.cursoSubject.next(curso),
    })
  );
}
  
  BorrarCurso(id: string){
    return this.http.delete<Cursos>(`${this.api}/Cursos/${id}`); 
    }
  }
  