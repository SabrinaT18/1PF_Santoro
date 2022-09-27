import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditUsuarioComponent } from "../componentes/usuario/componentes/edit-usuario/edit-usuario.component";
import { LoginComponent } from "./login/login.component";


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'edit-usuario', component: EditUsuarioComponent},
      ];
  
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }
  