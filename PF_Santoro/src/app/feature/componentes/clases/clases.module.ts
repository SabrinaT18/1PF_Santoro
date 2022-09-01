import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesService } from 'src/app/feature/servicios/clases.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AbmClasesComponent } from './editar-clases/abm-clases.component';
import { ClasesComponent } from './clases.component';
import { FeatureModule } from '../../feature.module';
import { NuevaClaseComponent } from './nueva-clase/nueva-clase.component';


@NgModule({
  declarations: [
    ClasesComponent,
    AbmClasesComponent,
    NuevaClaseComponent,
     ],

  imports: [
    CommonModule,
    ClasesRoutingModule,
    FeatureModule,
SharedModule,
  ],

  providers: [
    ClasesService
  ]
})
export class ClasesModule { }
