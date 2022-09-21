import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesService } from 'src/app/feature/servicios/clases.service';
import { ClasesComponent } from './clases.component';
import { FeatureModule } from '../../feature.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    ClasesComponent,

     ],

  imports: [
    CommonModule,
    ClasesRoutingModule,
    FeatureModule,
    MaterialModule,
    SharedModule
  ],

  providers: [
    ClasesService
  ]
})
export class ClasesModule { }
