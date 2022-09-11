import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuarioComponent } from "./usuario.component";
import { AdminGuard } from '../../core/admin.guard';

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent, canActivate: [AdminGuard]
  },
    { path: '**', redirectTo: 'Inicio', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

