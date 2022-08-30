import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumnos } from '../Model/Alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

alumnos : Alumnos [] = [
    { id: 1, apellido: 'Perez', nombre: 'Juan',  email: 'juan@mail.com', fechaNacimiento: '25/12/1991', nota: 9, estado: true  },
    { id: 2,apellido: 'Benitez', nombre: 'Candela',  email: 'candela@mail.com', fechaNacimiento: '05/09/1988', nota: 10, estado: true },
    {id: 3, apellido: 'García', nombre: 'Marcos',  email: 'marcos@mail.com', fechaNacimiento: '12/02/1983', nota: 4, estado: false },
    {id: 4, apellido: 'Nuñez', nombre: 'Alejo', email: 'alejo@mail.com', fechaNacimiento: '18/05/1984', nota: 6, estado: false },
    { id: 5,apellido: 'Suarez', nombre: 'Guadalupe', email: 'guadalupe@mail.com', fechaNacimiento: '21/08/1994', nota: 2, estado: false},
    { id: 6,apellido: 'Lopez', nombre: 'Victoria',  email: 'victoria@mail.com', fechaNacimiento: '16/04/1985',  nota: 8, estado: true}
  ];

alumnosObservable!: Observable<any>;

constructor()
{
this.alumnosObservable = new Observable <any> ((suscriptor) => {
  suscriptor.next(this.alumnos);
  }) 
  }

obtenerAlumnos() {
  return this.alumnosObservable;
 }

agregarAlumno( Alumnos: any) {
  this.alumnos.push(Alumnos)
   console.log(this.alumnos);
 }

 eliminarAlumno(id: number)
{      
  console.log(id +'fue eliminado correctamente');

}

}





