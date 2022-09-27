import { Action, createReducer, on } from '@ngrx/store';
import * as AlumnosActions from './alumnos.actions';
import { Alumnos } from '../../../Model/Alumnos';

export const alumnosFeatureKey = 'alumnos';

export interface alumnosState {
  cargando: boolean;
  alumnos?: Alumnos[];
}

export const initialState: alumnosState = {
  cargando: false
};

export const reducer = createReducer(
  initialState,
  on(AlumnosActions.loadAlumnos, state =>   {
      return { ...state, cargando: true }
    }),

    on(AlumnosActions.alumnosCargados, (state, { alumnos }) => {
      return { ...state, cargando: false, alumnos: alumnos };
    })
    );
