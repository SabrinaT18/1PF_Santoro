import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },

  {
    path: 'auth', loadChildren: () => import('./feature/auth/login-routing.module').then((m) => m.LoginRoutingModule)

  },
  {
    path: 'usuario', loadChildren: () => import('./feature/componentes/lista-alumnos/alumnos-routing.module').then((m) => m.AlumnosRoutingModule)
  },
  {
    path: 'usuario', loadChildren: () => import('./feature/componentes/cursos/cursos-routing.module').then((m) => m.CursosRoutingModule)
  },
  {
    path: 'usuario', loadChildren: () => import('./feature/componentes/inscripciones/inscripciones-routing.module').then((m) => m.InscripcionesRoutingModule)
  },
  {
    path: 'usuario', loadChildren: () => import('./feature/componentes/clases/clases-routing.module').then((m) => m.ClasesRoutingModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
