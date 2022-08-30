import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripciones } from '../Model/Inscripciones';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  inscripciones : Inscripciones [] = [
    {id: 101, idAlumno: 1, NombreAlumno: 'Juan', ApellidoAlumno : 'Perez',  IdCurso: 3,  NombreCurso: 'Geografía', comision: '20068', profesor: 'Grey, María' },
    {id: 102, idAlumno: 2, NombreAlumno: 'Candela', ApellidoAlumno : 'Benitez',  IdCurso: 3,  NombreCurso: 'Geografía', comision: '20068', profesor: 'Grey, María' },
    {id: 103, idAlumno: 3, NombreAlumno: 'Marcos', ApellidoAlumno : 'García',  IdCurso: 3,  NombreCurso: 'Geografía', comision: '20068', profesor: 'Grey, María' },
    {id: 104, idAlumno: 4, NombreAlumno: 'Nuñez', ApellidoAlumno : 'Alejo',  IdCurso: 3,  NombreCurso: 'Geografía', comision: '20068', profesor: 'Grey, María' },
  ];

IsncripObservable!: Observable<any>;

constructor()
{
this.IsncripObservable = new Observable <any> ((suscriptor) => {
  suscriptor.next(this.inscripciones);
  }) 
  }

obtenerInscripciones() {
  return this.IsncripObservable;
 }

agregarInscripciones( Inscripciones: any) {
  this.inscripciones.push(Inscripciones)
   console.log(this.inscripciones);
 }

 eliminarInscripciones(id: number)
{      
  console.log(id +'fue eliminado correctamente');
}
}