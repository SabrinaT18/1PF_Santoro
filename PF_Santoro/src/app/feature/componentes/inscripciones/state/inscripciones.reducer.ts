import { Action, createReducer, on } from '@ngrx/store';
import * as InscripcionesActions from './inscripciones.actions';
import { Inscripciones } from '../../../Model/Inscripciones';

export const inscripcionesFeatureKey = 'inscripciones';

export interface InscState {
  cargando: boolean;
  Ins?: Inscripciones[];
}

export const initialState: InscState = {
  cargando: false
};

export const reducer = createReducer(
  initialState,
  on(InscripcionesActions.loadInsc, state =>   {
      return { ...state, cargando: true }
    }),
  on(InscripcionesActions.InsCargadas, (state, { Ins }) => {
      return { ...state, cargando: false, Inscripciones: Ins };
    }),
    
    on(InscripcionesActions.cargarInscripcionesCurso, (state) => {
      return { ...state, cargando: true };
    }),
  
    on(
      InscripcionesActions.inscripcionesCargadasCurso,
      (state, { inscripciones }) => {
        return { ...state, cargando: false, Ins:inscripciones};
      }
    ),
  
    on(InscripcionesActions.cargarInscripcionesAlumno, (state) => {
      return { ...state, cargando: true };
    }),
  
    on(
      InscripcionesActions.inscripcionesCargadasAlumno,
      (state, { inscripciones }) => {
        return { ...state, cargando: false, Ins:inscripciones };
      }
    )
  );  
    
    
    
  