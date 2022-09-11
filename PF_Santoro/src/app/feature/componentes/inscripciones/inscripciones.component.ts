import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { InscripcionesService } from 'src/app/feature/servicios/inscripciones.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { InscState } from './state/inscripciones.reducer';
import { loadInsc } from './state/inscripciones.actions';
import { selectCargandoState } from './state/inscripciones.selectors';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  cargando$!: Observable<boolean>;

  constructor(
    private router: Router,
    private InsService: InscripcionesService,
    private store: Store<InscState>
  ) { }


  ngOnInit(): void {
    this.store.dispatch(loadInsc());
    this.cargando$ = this.store.select(selectCargandoState);
  }

  redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }

}

