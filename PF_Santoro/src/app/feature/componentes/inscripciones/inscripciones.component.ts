import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { InscripcionesService } from 'src/app/feature/servicios/inscripciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  InscripcionesObservable$!: Observable<any>;

  constructor(
   private inscripcionesService: InscripcionesService,
   private router: Router,
  ) {  
 
  }

  ngOnInit(): void { 
    this.InscripcionesObservable$ = this.inscripcionesService.obtenerInscripciones()
   }


  redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }

}

