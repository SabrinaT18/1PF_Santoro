import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { UsuarioRoutingModule } from './componentes/usuario/usuario-routing.module';
import { adminComponent } from './componentes/usuario/componentes/dash-admin/admin.component';
import { VerUsuariosComponent } from './componentes/usuario/componentes/ver-usuarios/ver-usuarios.component';

@NgModule({
  declarations: [
    LoginComponent,
    ],
  
    imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
       ],

    providers: [
     ]



})
export class FeatureModule { }
