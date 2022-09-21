import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from '../../core/guard/admin.guard';
import { adminComponent } from "./admin.component";
import { UsuarioComponent } from '../componentes/usuario/usuario.component';

const routes: Routes = [
  { path: 'admin', component: adminComponent, canActivate: [AdminGuard]
  },
  { path: 'panel-usuario', component: UsuarioComponent},
    { path: '**', redirectTo: 'Inicio', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

