import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/admin.guard';
import { CursosComponent } from './cursos.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { AbmCursosComponent } from './editar-cursos/abm-cursos.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';

const routes: Routes = [
  {    path: 'cursos', component: CursosComponent, children: [
      { path: 'lista', component: ListaCursosComponent, },
      { path: 'new', component: NuevoCursoComponent,  },
      { path: 'edit', component: AbmCursosComponent, canDeactivate: [AdminGuard] }
],
canActivateChild: [AdminGuard]}
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
