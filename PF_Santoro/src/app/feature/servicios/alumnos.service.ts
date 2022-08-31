import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumnos } from '../Model/Alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private api: string = environment.api;

  constructor(
    private http: HttpClient) { }


  obtenerAlumnos(): Observable<Alumnos[]> {
    return this.http.get<Alumnos[]>(`${this.api}/alumnos`);
  }

  agregarAlumno(alumno: Alumnos) {
    return this.http.post<Alumnos>(`${this.api}/alumnos`, alumno);
  }

  EditarAlumno(alumno: Alumnos) {
    return this.http.put<Alumnos>(`${this.api}/alumnos/${alumno.id}`, alumno);
  }

  eliminarAlumno(id: string) {
    return this.http.delete<Alumnos>(`${this.api}/alumnos/${id}`);
  }

 }





