import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripciones from './inscripciones.reducer';

export const selectInscripcionesState = createFeatureSelector<fromInscripciones.InscState>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectCargandoState = createSelector(
  selectInscripcionesState,
  (state: fromInscripciones.InscState) => state.cargando
);

export const selectInsCargadosState = createSelector(
  selectInscripcionesState,
  (state: fromInscripciones.InscState) => state.Ins
);
