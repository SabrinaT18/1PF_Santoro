import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
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
    })
    );
  }

  EditarAlumno(alumno: Alumnos) {
    return this.http.put<Alumnos>(`${this.api}/alumnos/${alumno.idAlumno}`, alumno).pipe(    
      tap({
      next: () => this.alumnoSubject.next(alumno),
      })
      );
  }

  eliminarAlumno(id: string) {
    return this.http.delete<Alumnos>(`${this.api}/alumnos/${id}`);
  }

 }






