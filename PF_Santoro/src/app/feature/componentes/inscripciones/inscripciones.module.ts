import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';

import { InscripcionesService } from 'src/app/feature/servicios/inscripciones.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NuevaInscrComponent } from './nueva-inscr/nueva-inscr.component';
import { AbmInscripComponent } from './editar-inscripciones/abm-inscrip.component';
import { InscripcionesComponent } from './inscripciones.component';
import { FeatureModule } from '../../feature.module';
import { InscripcionesListaComponent } from './inscripciones-lista/inscripciones-lista.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './state/inscripciones.effects';
import  * as fromInscripciones from './state/inscripciones.reducer';
import { DetalleInsComponent } from './detalle-ins/detalle-ins.component';


@NgModule({

  declarations: [
    InscripcionesComponent,
    AbmInscripComponent,
    NuevaInscrComponent,
    InscripcionesListaComponent,
    DetalleInsComponent
  ],

  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    FeatureModule,
    SharedModule,
    StoreModule.forFeature(fromInscripciones.inscripcionesFeatureKey, fromInscripciones.reducer),
    EffectsModule.forFeature([InscripcionesEffects]),
  ],

  providers: [
    InscripcionesService
  ]

})
export class InscripcionesModule { }
