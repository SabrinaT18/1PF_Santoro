import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from '../Model/Cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  [x: string]: any;

  cursos: Cursos [] = [ 
    {id: 1, materia: 'Historia', comision: '20054', profesor: 'García, Florencia'},
    {id: 2, materia: 'Matemáticas', comision: '20965', profesor: 'Perez, Juan'},
    {id: 3, materia: 'Geografía', comision: '20068', profesor: 'Grey, María'},
    {id: 4, materia: 'Literatura', comision: '20497', profesor: 'Berón, Bautista'},
    {id: 5, materia: 'Física', comision: '20326', profesor: 'Almada, Eugenia'},
  ];  
  
  cursosObservable : Observable <any>;
  
  constructor() {
  this.cursosObservable = new Observable <any> ((suscriptor) => {
    suscriptor.next(this.cursos);
    })
  }
  
  obtenerObservableCursos(){
  return this.cursosObservable;
  }
    
  obtenerPromiseCursos () {
    return new Promise ((resolve, reject) => {
      if (this.cursos.length > 0) {
        resolve (this.cursos);
      }else {
        reject ({
          mensaje: 'No hay cursos cargados'
        });
      }
    });
  }
  
  
  AgregarCurso(cursos: any){
  this.cursos.push(cursos); 
  console.log(this.cursos)
    }
  }
  