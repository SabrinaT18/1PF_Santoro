import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guard/admin.guard';
import { GuardAuthGuard } from './core/guard/guard-auth.guard';
import { InicioComponent } from './core/inicio/inicio.component';
import { adminComponent } from './feature/componentes/usuario/componentes/dash-admin/admin.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate: [GuardAuthGuard]},  
  
   { path: 'auth', loadChildren: () => import('./feature/auth/login-routing.module').then((m) => m.LoginRoutingModule)

  },  
  {path: 'admin', component: adminComponent, loadChildren: () => import('./feature/componentes/usuario/usuario-routing.module').then((m) => m.UsuarioRoutingModule), 
  canActivate: [GuardAuthGuard], canLoad: [GuardAuthGuard]},

  {
    path: 'usuario', loadChildren: () => import('./feature/componentes/lista-alumnos/alumnos-routing.module').then((m) => m.AlumnosRoutingModule), 
    canActivate: [GuardAuthGuard],  canLoad: [GuardAuthGuard]

  },
  {
    path: 'usuario', loadChildren: () => import('./feature/componentes/cursos/cursos-routing.module').then((m) => m.CursosRoutingModule), 
    canActivate: [GuardAuthGuard],  canLoad: [GuardAuthGuard]
  },
  {
    path: 'usuario', loadChildren: () => import('./feature/componentes/inscripciones/inscripciones-routing.module').then((m) => m.InscripcionesRoutingModule), 
     canActivate: [GuardAuthGuard],  canLoad: [GuardAuthGuard]
  },
  {
    path: 'usuario', loadChildren: () => import('./feature/componentes/clases/clases-routing.module').then((m) => m.ClasesRoutingModule), 
    canActivate: [GuardAuthGuard],
    canLoad: [GuardAuthGuard]

  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
