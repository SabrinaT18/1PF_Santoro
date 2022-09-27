import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inscripciones } from '../Model/Inscripciones';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
InscSubject= new Subject<any>();
private api = environment.URLapi ;

constructor(
  private http: HttpClient)
{  }

  
    obtenerInscripciones(): Observable<Inscripciones[]> {
      return this.http.get<Inscripciones[]>(`${this.api}/Inscripciones`); 
     }
         
     agregarInscripciones(insc: Inscripciones){
       return this.http.post<Inscripciones>(`${this.api}/Inscripciones`, insc).pipe(tap({
        next: (insc) => this.InscSubject.next(insc),
      })).pipe(
        catchError(this.manejarError)
    ); 
       }
   
     EditarInscripciones(insc: Inscripciones){
     return this.http.put<Inscripciones>(`${this.api}/Inscripciones/${insc.id}`, insc).pipe(    
      tap({
        next: () => this.InscSubject.next(insc),
      })).pipe(
        catchError(this.manejarError)
    ); 
     }
     
     eliminarInscripciones(id: string){
       return this.http.delete<Inscripciones>(`${this.api}/Inscripciones/${id}`)       
       .pipe(tap({
           next: () => this.InscSubject.next(id),
         })).pipe(
          catchError(this.manejarError)
       );
   }

obtenerInscripcionesFiltradoCurso(inscripcion: any): Observable<any> {
  return this.http.get<any>(
    `${this.api}/Inscripciones?idCurso=${inscripcion.idCurso}`).pipe(
      catchError(this.manejarError)
  );
}

obtenerInscripcionesFiltradoAlumno(inscripcion: any): Observable<any> {
  return this.http.get<any>(
    `${this.api}/Inscripciones?idAlumno=${inscripcion.idAlumno}`).pipe(
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
