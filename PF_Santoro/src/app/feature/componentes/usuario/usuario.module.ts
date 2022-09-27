import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditUsuarioComponent } from './componentes/edit-usuario/edit-usuario.component';
import { NuevoUsuarioComponent } from './componentes/nuevo-usuario/nuevo-usuario.component';
import { UsuarioEffects } from './state/usuario.effects';
import * as fromUsuario from './state/usuario.reducer';
import { UsuarioComponent } from './componentes/tabla-usuario/usuario.component';
import { PerfilActivoComponent } from './componentes/perfil-activo/perfil-activo.component';
import { FeatureModule } from 'src/app/feature/feature.module';
import { VerUsuariosComponent } from './componentes/ver-usuarios/ver-usuarios.component';
import { adminComponent } from './componentes/dash-admin/admin.component';



@NgModule({
  declarations: [
    NuevoUsuarioComponent,
    EditUsuarioComponent,
    PerfilActivoComponent,
    VerUsuariosComponent,
    UsuarioComponent,
    adminComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    FeatureModule,
    StoreModule.forFeature(fromUsuario.usuarioFeatureKey, fromUsuario.reducer),
    EffectsModule.forFeature([UsuarioEffects]),
  ]
})
export class UsuarioModule { }

