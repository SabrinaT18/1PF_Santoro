import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuarioComponent } from "./usuario.component";

const routes: Routes = [
      {path: '', component: UsuarioComponent},
      {path: '**', redirectTo: 'Inicio', pathMatch:'full'},
  ];
  
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class UsuarioRoutingModule { }
  