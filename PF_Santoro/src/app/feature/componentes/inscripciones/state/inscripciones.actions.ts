import { createAction, props } from '@ngrx/store';
import { Inscripciones } from 'src/app/feature/Model/Inscripciones';

export const loadInsc = createAction(
  '[Inscripciones] Load Inscripciones'
);

export const InsCargadas = createAction(
  '[Inscripciones] Inscripciones Cargadas',
  props<{Ins: Inscripciones[]} >()
  );
  export const cargarInscripcionesCurso = createAction(
    '[Lista Inscripciones por Curso] Cargar Inscripciones por curso',
    props<{ idCurso: string }>()
  );
  
  export const inscripcionesCargadasCurso = createAction(
    '[Lista Inscripciones cargadas por curso] Inscripciones cargadas por curso',
    props<{ inscripciones: Inscripciones[] }>()
  );
  
  export const cargarInscripcionesAlumno = createAction(
    '[Lista Inscripciones por Alumno] Cargar Inscripciones por alumno',
    props<{ idAlumno: string }>()
  );
  
  export const inscripcionesCargadasAlumno = createAction(
    '[Lista Inscripciones cargadas por alumno] Inscripciones cargadas por alumno',
    props<{ inscripciones: Inscripciones[] }>()
  );



