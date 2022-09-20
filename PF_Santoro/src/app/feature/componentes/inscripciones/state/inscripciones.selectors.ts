import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripciones from './inscripciones.reducer';
import { InscState } from './inscripciones.reducer';

export const selectInscripcionesState = createFeatureSelector<fromInscripciones.InscState>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectCargandoState = createSelector(
  selectInscripcionesState,
  (state: InscState) => state.cargando
);

export const selectInsCargadosState = createSelector(
  selectInscripcionesState,
  (state: InscState) => state.Ins
);

export const selectorListaInscripcionesCurso = createSelector(
  selectInscripcionesState,
  (state: InscState) => state.Ins
);

export const selectorListaInscripcionesAlumno = createSelector(
  selectInscripcionesState,
  (state: InscState) => state.Ins
);