import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from 'src/app/feature/servicios/cursos.service';

import { SharedModule } from 'src/app/shared/shared.module';
import { AbmCursosComponent } from './editar-cursos/abm-cursos.component';
import { CursosComponent } from './cursos.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { FeatureModule } from '../../feature.module';


@NgModule({
  declarations: [
    CursosComponent,
    AbmCursosComponent,
    NuevoCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FeatureModule,
    SharedModule,
  ],

  providers: [
    CursosService
  ]
})
export class CursosModule { }
