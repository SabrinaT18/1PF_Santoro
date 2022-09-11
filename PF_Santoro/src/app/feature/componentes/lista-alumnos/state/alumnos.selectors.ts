import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnos from './alumnos.reducer';

export const selectAlumnosState = createFeatureSelector<fromAlumnos.alumnosState>(
  fromAlumnos.alumnosFeatureKey
);

export const selectCargandoState = createSelector(
  selectAlumnosState,
  (state: fromAlumnos.alumnosState) => state.cargando
);

export const selectAlumnosCargadosState = createSelector(
  selectAlumnosState,
  (state: fromAlumnos.alumnosState) => state.alumnos
);
