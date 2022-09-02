import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';

import { AlumnosService } from 'src/app/feature/servicios/alumnos.service';
import { ABMalumnosComponent } from './editar-alumnos/abmalumnos.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos.component';
import { FeatureModule } from '../../feature.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    ListaAlumnosComponent,
    NuevoAlumnoComponent,
    ABMalumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    FeatureModule,
    SharedModule,
    ],

  providers: [
    AlumnosService
  ]
    

})
export class AlumnosModule { }
