import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormGroup, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ABMalumnosComponent } from './componentes/lista-alumnos/abmalumnos/abmalumnos.component';
import { AbmClasesComponent } from './componentes/clases/abm-clases/abm-clases.component';
import { AbmCursosComponent } from './componentes/cursos/abm-cursos/abm-cursos.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ClasesComponent } from './componentes/clases/clases.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { NuevoAlumnoComponent } from './componentes/lista-alumnos/nuevo-alumno/nuevo-alumno.component';
import { AbmInscripComponent } from './componentes/inscripciones/abm-inscrip/abm-inscrip.component';
import { NuevaInscrComponent } from './componentes/inscripciones/nueva-inscr/nueva-inscr.component';
import { NuevoCursoComponent } from './componentes/cursos/nuevo-curso/nuevo-curso.component';
import { InscripcionesComponent } from './componentes/inscripciones/inscripciones.component';


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
    ToolbarComponent,
    NuevaInscrComponent,
    NuevoAlumnoComponent,
    AbmInscripComponent,
    NuevoCursoComponent,
    InscripcionesComponent
    ],
  
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
    SharedModule,
    UsuarioRoutingModule
      ]
})
export class FeatureModule { }
