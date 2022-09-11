import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap } from 'rxjs/operators';
import { InscripcionesService } from '../../../servicios/inscripciones.service';
import { Inscripciones } from '../../../Model/Inscripciones';
import { InsCargadas, loadInsc } from './inscripciones.actions';

@Injectable()
export class InscripcionesEffects {
   loadIns$ = createEffect(() => this.actions$.pipe( 
    ofType(loadInsc),
    mergeMap(() => this.InscripcionesService.obtenerInscripciones().pipe(
      map((ins: Inscripciones[]) => InsCargadas ({Ins: ins}))
  ))
));

constructor(private actions$: Actions,
  private InscripcionesService: InscripcionesService
  ) {}
}