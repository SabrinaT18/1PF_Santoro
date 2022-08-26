import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/inicio/inicio.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { ClasesComponent } from './feature/componentes/clases/clases.component';
import { CursosComponent } from './feature/componentes/cursos/cursos.component';
import { ListaAlumnosComponent } from './feature/componentes/lista-alumnos/lista-alumnos.component';
import { UsuarioComponent } from './feature/usuario/usuario.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuario', component: UsuarioComponent, children: [
    {path: 'alumnos', component: ListaAlumnosComponent},
    {path: 'cursos', component: CursosComponent} ,
    {path: 'clases', component: ClasesComponent}
]},
  {path: '', redirectTo: 'inicio', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
