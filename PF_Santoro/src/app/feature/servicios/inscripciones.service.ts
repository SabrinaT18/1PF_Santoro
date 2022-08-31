import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inscripciones } from '../Model/Inscripciones';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

private api: string = environment.api ;

constructor(
  private http: HttpClient)
{  }

  
    obtenerInscripciones(): Observable<Inscripciones[]> {
      return this.http.get<Inscripciones[]>(`${this.api}/Inscripciones`); 
     }
         
     agregarInscripciones(insc: Inscripciones){
       return this.http.post<Inscripciones>(`${this.api}/Inscripciones`, insc); 
       }
   
     EditarInscripciones(insc: Inscripciones){
     return this.http.put<Inscripciones>(`${this.api}/Inscripciones/${insc.id}`, insc); 
     }
     
     eliminarInscripciones(id: string){
       return this.http.delete<Inscripciones>(`${this.api}/Inscripciones/${id}`); 
/*        console.log (id +'fue eliminado correctamente'); */
}
}
