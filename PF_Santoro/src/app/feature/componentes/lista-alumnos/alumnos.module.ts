import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';

import { AlumnosService } from 'src/app/feature/servicios/alumnos.service';
import { ABMalumnosComponent } from './editar-alumnos/abmalumnos.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos.component';
import { FeatureModule } from '../../feature.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosEffects } from './state/alumnos.effects';
import * as fromAlumnos from './state/alumnos.reducer';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    ListaAlumnosComponent,
    NuevoAlumnoComponent,
    ABMalumnosComponent,
    AlumnosComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    FeatureModule,
    SharedModule,
    StoreModule.forFeature(fromAlumnos.alumnosFeatureKey, fromAlumnos.reducer),
 EffectsModule.forFeature([AlumnosEffects]),
    ],

  providers: [
    AlumnosService
  ]
    

})
export class AlumnosModule { }
