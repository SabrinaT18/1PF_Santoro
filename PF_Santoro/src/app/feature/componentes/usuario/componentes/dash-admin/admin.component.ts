import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuariosService } from '../../../../servicios/usuarios.service';
import { loadUsuarios } from '../../state/usuario.actions';
import { UsuarioState } from '../../state/usuario.reducer';
import { selectCargandoUsuarios } from '../../state/usuario.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class adminComponent implements OnInit {
  cargando$!: Observable<boolean>;

  constructor(
    private UsuariosService: UsuariosService,
    private router: Router,
    private store: Store<UsuarioState>
  ) { }

  ngOnInit(): void {
    this.cargando$ = this.store.select(selectCargandoUsuarios);
    this.store.dispatch(loadUsuarios());
  }

  redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }

 
}
