import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cursos } from '../Model/Cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private api = environment.URLapi;
  cursoSubject = new Subject<any>();


  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`${this.api}/Cursos`);
  }

  AgregarCurso(curso: Cursos) {
    return this.http.post<Cursos>(`${this.api}/Cursos`, curso).pipe(tap({
      next: (curso) => this.cursoSubject.next(curso),
    })).pipe(
      catchError(this.manejarError)
    );
  }

  EditarCurso(curso: Cursos) {
    return this.http.put<Cursos>(`${this.api}/Cursos/${curso.idCurso}`, curso).pipe(
      tap({
        next: () => this.cursoSubject.next(curso),
      })).pipe(
        catchError(this.manejarError)
      );
  }

  BorrarCurso(id: string) {
    return this.http.delete<Cursos>(`${this.api}/Cursos/${id}`).pipe(
      catchError(this.manejarError)
      );
  }
 

  private manejarError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.warn('Error del lado del cliente', error.error.message);
    } else {
      console.warn('Error del lado del servidor', error.status, error.message)
      alert('Hubo un error de comunicacion, intente de nuevo')
    }
    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}
