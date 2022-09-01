import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/inicio/inicio.component';
import { LoginRoutingModule } from './feature/auth/login-routing.module';
import { AlumnosRoutingModule } from './feature/componentes/lista-alumnos/alumnos-routing.module';
import { CursosRoutingModule } from './feature/componentes/cursos/cursos-routing.module';
import { InscripcionesModule } from './feature/componentes/inscripciones/inscripciones.module';
import { InscripcionesRoutingModule } from './feature/componentes/inscripciones/inscripciones-routing.module';
import { ClasesRoutingModule } from './feature/componentes/clases/clases-routing.module';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'auth', loadChildren:() => import('./feature/auth/login-routing.module').then((m) => m.LoginRoutingModule)
  },
  {path: 'usuario', loadChildren:() => import('./feature/componentes/lista-alumnos/alumnos-routing.module').then((m) => m.AlumnosRoutingModule)
},
{path: 'usuario', loadChildren:() => import('./feature/componentes/cursos/cursos-routing.module').then((m) => m.CursosRoutingModule)
},
{path: 'usuario', loadChildren:() => import('./feature/componentes/inscripciones/inscripciones-routing.module').then((m) => m.InscripcionesRoutingModule)
},
{path: 'usuario', loadChildren:() => import('./feature/componentes/clases/clases-routing.module').then((m) => m.ClasesRoutingModule)
},
  {path: '', redirectTo: 'inicio', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
