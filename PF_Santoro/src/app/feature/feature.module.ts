import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormGroup, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ABMalumnosComponent } from './formularios abm/abmalumnos/abmalumnos.component';
import { AbmClasesComponent } from './formularios abm/abm-clases/abm-clases.component';
import { AbmCursosComponent } from './formularios abm/abm-cursos/abm-cursos.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ClasesComponent } from './componentes/clases/clases.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';


@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    UsuarioComponent,
    ListaAlumnosComponent,
    ABMalumnosComponent,
    ClasesComponent,
    CursosComponent,
    AbmCursosComponent,
    AbmClasesComponent,
    ToolbarComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
    SharedModule
      ]
})
export class FeatureModule { }
