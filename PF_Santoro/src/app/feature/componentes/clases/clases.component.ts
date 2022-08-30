import { Component, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { ClasesService } from '../../servicios/clases.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  clases: any = [];
  clasesSuscripcion: Subscription;
  clasesObservable$!: Observable<any>;

  constructor(
    private ClasesService: ClasesService
  ) {

    this.ClasesService.obtenerPromiseClases().then((clases) => {
      console.log('desde promise: ', clases);
    }).catch((error) => {
      console.log(error);
    });

    this.ClasesService.obtenerObservableClases().subscribe((clases) => {
      console.log('desde el observable: ', clases);
      this.clases = clases;
    });

    this.clasesSuscripcion = this.ClasesService.obtenerObservableClases().subscribe((clases) => {
      this.clases = clases;
    });
    this.clasesObservable$ = this.ClasesService.obtenerObservableClases();
    console.log(this.clasesObservable$);
  }


  ngOnInit(): void {
    this.ClasesService.obtenerObservableClases().pipe(map((clases: any[]) =>
      clases.filter(clases =>
        clases.id === 1))).subscribe((clases) => {
          console.log('probando pipe map', clases);
        });
  }

  obtenerPromiseClases() {
    return this.ClasesService.clases;
  }

  ngOnDestroy(): void {
    console.log("Ejecutando ngOnDestroy");
    this.clasesSuscripcion.unsubscribe();
  }

  AgregarClase() {
    let clase = {
      id: 6, ClaseNum: 6,tema: 'examen', fecha: 'xxxxx'
    }
    this.ClasesService.AgregarClase(clase);
  }
}
