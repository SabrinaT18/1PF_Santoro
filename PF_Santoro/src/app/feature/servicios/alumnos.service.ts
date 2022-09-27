import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumnos } from '../Model/Alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private api= environment.URLapi;
  alumnoSubject = new Subject<any>();

  constructor(
    private http: HttpClient) { }


  obtenerAlumnos(): Observable<Alumnos[]> {
    return this.http.get<Alumnos[]>(`${this.api}/alumnos`);
  }

  agregarAlumno(alumno: Alumnos) {
    return this.http.post<Alumnos>(`${this.api}/alumnos`, alumno).pipe(tap({
      next: (alumno) => this.alumnoSubject.next(alumno),
    })).pipe(
      catchError(this.manejarError)
    );
  }

  EditarAlumno(alumno: Alumnos) {
    return this.http.put<Alumnos>(`${this.api}/alumnos/${alumno.idAlumno}`, alumno).pipe(    
      tap({
      next: () => this.alumnoSubject.next(alumno),
      })).pipe(
        catchError(this.manejarError)
      );
  }

  eliminarAlumno(id: string) {
    return this.http.delete<Alumnos>(`${this.api}/alumnos/${id}`).pipe(
      catchError(this.manejarError)
    );
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.status, error.message)
      alert('Hubo un error de comunicacion, intente de nuevo')
    }
    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }


 }






