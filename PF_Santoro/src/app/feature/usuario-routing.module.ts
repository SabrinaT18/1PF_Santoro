import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClasesComponent } from "./componentes/clases/clases.component";
import { CursosComponent } from "./componentes/cursos/cursos.component";
import { InscripcionesComponent } from "./componentes/inscripciones/inscripciones.component";
import { ListaAlumnosComponent } from "./componentes/lista-alumnos/lista-alumnos.component";
import { UsuarioComponent } from "./usuario/usuario.component";

const routes: Routes = [
  {path: 'usuario', component: UsuarioComponent, 
  children: [
    {path: 'alumnos', component: ListaAlumnosComponent},
    {path: 'cursos', component: CursosComponent} ,
    {path: 'inscripciones', component: InscripcionesComponent},
    {path: 'clases', component: ClasesComponent},
  ]},
      {path: '**', redirectTo: 'Inicio', pathMatch:'full'},
  ];
  
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class UsuarioRoutingModule { }
  