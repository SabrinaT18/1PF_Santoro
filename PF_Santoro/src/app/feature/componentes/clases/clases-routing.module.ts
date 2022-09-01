import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/admin.guard';
import { ClasesComponent } from './clases.component';
import { AbmClasesComponent } from './editar-clases/abm-clases.component';
import { NuevaClaseComponent } from './nueva-clase/nueva-clase.component';


const routes: Routes = [
  {path: 'clases', component: ClasesComponent, children: [
    {path: 'new', component: NuevaClaseComponent   },
    {path: 'edit', component: AbmClasesComponent, canDeactivate: [AdminGuard] }
  ],
  canActivateChild: [AdminGuard]}
 ];
   

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
