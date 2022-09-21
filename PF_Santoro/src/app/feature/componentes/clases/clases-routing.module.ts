import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guard/admin.guard';
import { ClasesComponent } from './clases.component';


const routes: Routes = [
  {path: 'clases', component: ClasesComponent, children: [
    
  ],
  canActivateChild: [AdminGuard]}
 ];
   

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
