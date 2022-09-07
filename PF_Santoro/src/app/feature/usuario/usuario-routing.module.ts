import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuarioComponent } from "./usuario.component";

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent, 
  },
    { path: '**', redirectTo: 'Inicio', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
