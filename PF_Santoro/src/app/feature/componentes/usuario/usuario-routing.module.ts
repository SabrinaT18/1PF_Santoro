import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from '../../../core/guard/admin.guard';
import { UsuarioComponent } from "./componentes/tabla-usuario/usuario.component";
import { adminComponent } from "./componentes/dash-admin/admin.component";
import { PerfilActivoComponent } from "./componentes/perfil-activo/perfil-activo.component";

const routes: Routes = [
  {path: 'perfil', component: PerfilActivoComponent },
  {path: 'admin', component: adminComponent, canActivate: [AdminGuard], 
  children: [
       { path: 'panel-usuario', component: UsuarioComponent }
    ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

