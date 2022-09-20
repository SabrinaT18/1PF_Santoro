import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { exhaustMap, map, mergeMap } from 'rxjs/operators';
import { InscripcionesService } from '../../../servicios/inscripciones.service';
import { Inscripciones } from '../../../Model/Inscripciones';
import { cargarInscripcionesAlumno, cargarInscripcionesCurso, InsCargadas, inscripcionesCargadasAlumno, inscripcionesCargadasCurso, loadInsc } from './inscripciones.actions';

@Injectable()
export class InscripcionesEffects {
   loadIns$ = createEffect(() => this.actions$.pipe( 
    ofType(loadInsc),
    mergeMap(() => this.InscripcionesService.obtenerInscripciones().pipe(
      map((ins: Inscripciones[]) => InsCargadas ({Ins: ins}))
  ))
));

cargarInscripcionesCursoEffect = createEffect(() =>
this.actions$.pipe(ofType(cargarInscripcionesCurso),
  exhaustMap((idCurso) =>
    this.InscripcionesService
      .obtenerInscripcionesFiltradoCurso(idCurso)
      .pipe(
        map((inscripciones) =>
          inscripcionesCargadasCurso({ inscripciones })
        )
      )
  )
)
);

cargarInscripcionesAlumnoEffect = createEffect(() =>
this.actions$.pipe(
  ofType(cargarInscripcionesAlumno),
  exhaustMap((idAlumno) =>
    this.InscripcionesService
      .obtenerInscripcionesFiltradoAlumno(idAlumno)
      .pipe(map((inscripciones) =>
          inscripcionesCargadasAlumno({ inscripciones })
        )
      )
  )
)
);

constructor(private actions$: Actions,
  private InscripcionesService: InscripcionesService
  ) {}
}
