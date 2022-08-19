import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { Clases } from '../Model/Clases';

@Injectable({
  providedIn: 'root'
})

export class ClasesService {
clases: Clases[] = [ 
{id: 1, materia: 'Historia', comision: '20054'},
{id: 2, materia: 'Matemáticas', comision: '20965'},
{id: 3, materia: 'Geografía', comision: '20068'},
{id: 4, materia: 'Literatura', comision: '20497'},
{id: 5, materia: 'Física', comision: '20326'},
];  

clasesObservable : Observable <any>;

constructor() {
this.clasesObservable = new Observable <any> ((suscriptor) => {
  suscriptor.next(this.clases);
  })
}

obtenerObservableClases(){
return this.clasesObservable;
}
  
obtenerPromiseClases () {
  return new Promise ((resolve, reject) => {
    if (this.clases.length > 0) {
      resolve (this.clases);
    }else {
      reject ({
        mensaje: 'No hay clases cargadas'
      });
    }
  });
}


AgregarClase(clases: any){
this.clases.push(clases); 
console.log(this.clases)
  }
}

