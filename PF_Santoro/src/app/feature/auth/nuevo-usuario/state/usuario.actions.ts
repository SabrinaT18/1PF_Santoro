import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/feature/Model/Usuario';

export const loadUsuarios = createAction(
  '[Usuario] Load Usuarios'
);

export const usuariosCargados = createAction(
  '[Lista Usuarios] Usuarios Cargados',
  props<{ usuarios: Usuario[] }>()
);





