import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { LoginComponent } from '../feature/auth/login/login.component';
import { ListaAlumnosComponent } from '../feature/componentes/lista-alumnos/lista-alumnos.component';
import { CursosComponent } from '../feature/componentes/cursos/cursos.component';
import { ClasesComponent } from '../feature/componentes/clases/clases.component';

const routes: Routes = [
    {path: 'Inicio', component: InicioComponent},
    {path: 'login', component: LoginComponent},
    ];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class CoreRoutingModule{}