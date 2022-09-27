import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { Clases } from '../Model/Clases';

@Injectable({
  providedIn: 'root'
})

export class ClasesService {
clases: Clases[] = [ 
{id: 1, ClaseNum: 1, tema: 'Introducción', fecha: 'xxxxx'},
{id: 2, ClaseNum: 2, tema: 'a designar', fecha: 'xxxxx'},
{id: 3, ClaseNum: 3, tema: 'a designar', fecha: 'xxxxx'},
{id: 4, ClaseNum: 4, tema: 'a designar', fecha: 'xxxxx'},
{id: 5, ClaseNum: 5,tema: 'a designar', fecha: 'xxxxx'},
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

