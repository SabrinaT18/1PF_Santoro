import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Usuario } from 'src/app/feature/Model/Usuario';
import { Observable } from 'rxjs';
import { SesionState } from 'src/app/core/state/sesion.reducer';
import { Store } from '@ngrx/store';
import { selectSesionActivaState, selectUsuarioActivoState, selectUsuarioAdminState } from 'src/app/core/state/sesion.selectors';
import { cerrarSesion } from 'src/app/core/state/sesion.actions';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
usuario$!: Observable<Usuario[]>;
usuarioActivo$!: Observable<Usuario | undefined>;
usuarioAdmin$: Observable<boolean | undefined>;
sesionActiva$: Observable<boolean | undefined>;

ruta!: string;

  constructor(
    private Authstore: Store<SesionState>,
    private router: Router,
    ) { 
     
this.router.events.subscribe((event) => {
  if (event instanceof NavigationStart) {
    this.ruta = event.url;
  }
});

this.usuarioActivo$ = this.Authstore.select(selectUsuarioActivoState);
this.usuarioAdmin$ = this.Authstore.select(selectUsuarioAdminState);
this.sesionActiva$ = this.Authstore.select(selectSesionActivaState);
}

  ngOnInit(): void {
  }

  
redireccionar(ruta: string) {
    this.router.navigate ([ruta]);
    }

  cerrarSesion(){
  this.Authstore.dispatch(cerrarSesion());
  this.router.navigate(['auth/login'])
  }
 }
