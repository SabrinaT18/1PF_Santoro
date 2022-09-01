import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesComponent } from './inscripciones.component';
import { NuevaInscrComponent } from './nueva-inscr/nueva-inscr.component';
import { AbmInscripComponent } from './editar-inscripciones/abm-inscrip.component';
import { AdminGuard } from 'src/app/core/admin.guard';

const routes: Routes = [
  {path: 'inscripciones', component: InscripcionesComponent,children: [    
    {path: 'new', component:  NuevaInscrComponent  },
    {path: 'edit', component: AbmInscripComponent , canDeactivate: [AdminGuard] }
  ],
  canActivateChild: [AdminGuard]}
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
