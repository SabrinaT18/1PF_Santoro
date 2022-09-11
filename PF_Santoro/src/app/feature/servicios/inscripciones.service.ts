import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
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
      })
    ); 
       }
   
     EditarInscripciones(insc: Inscripciones){
     return this.http.put<Inscripciones>(`${this.api}/Inscripciones/${insc.id}`, insc).pipe(    
      tap({
        next: () => this.InscSubject.next(insc),
      })
    ); 
     }
     
     eliminarInscripciones(id: string){
       return this.http.delete<Inscripciones>(`${this.api}/Inscripciones/${id}`); 
}
}
