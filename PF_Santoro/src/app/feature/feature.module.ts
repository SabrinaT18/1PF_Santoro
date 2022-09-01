import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormGroup, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from '../shared/layout/navbar/navbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ABMalumnosComponent } from './componentes/lista-alumnos/editar-alumnos/abmalumnos.component';
import { AbmClasesComponent } from './componentes/clases/editar-clases/abm-clases.component';
import { AbmCursosComponent } from './componentes/cursos/editar-cursos/abm-cursos.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ClasesComponent } from './componentes/clases/clases.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { ToolbarComponent } from '../shared/layout/toolbar/toolbar.component';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { NuevoAlumnoComponent } from './componentes/lista-alumnos/nuevo-alumno/nuevo-alumno.component';
import { AbmInscripComponent } from './componentes/inscripciones/editar-inscripciones/abm-inscrip.component';
import { NuevaInscrComponent } from './componentes/inscripciones/nueva-inscr/nueva-inscr.component';
import { NuevoCursoComponent } from './componentes/cursos/nuevo-curso/nuevo-curso.component';
import { InscripcionesComponent } from './componentes/inscripciones/inscripciones.component';
import { AlumnosService } from './servicios/alumnos.service';
import { ClasesService } from './servicios/clases.service';
import { CursosService } from './servicios/cursos.service';


@NgModule({
  declarations: [
    LoginComponent,
    UsuarioComponent,
    ],
  
    imports: [
    CommonModule,
    SharedModule,  
    UsuarioRoutingModule
      ],

    providers: [
      ]
})
export class FeatureModule { }
