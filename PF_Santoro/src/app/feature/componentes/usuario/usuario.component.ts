import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from '../../Model/Usuario';
import { SesionState } from 'src/app/core/state/sesion.reducer';
import { Store } from '@ngrx/store';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { selectUsuarioActivoState, selectSesionActivaState } from 'src/app/core/state/sesion.selectors';
import { Observable, Subscription } from 'rxjs';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';
import { loadUsuarios, usuariosCargados } from '../../auth/nuevo-usuario/state/usuario.actions';
import { selectorListaUsuarios } from '../../auth/nuevo-usuario/state/usuario.selectors';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioActivo$!: Observable<Usuario | undefined>;
  sesionActiva$: Observable<boolean | undefined>;

  constructor(
    private dialog: MatDialog,
    private Authstore: Store<SesionState>,
    public store: Store,
  ) { 

    this.usuarioActivo$ = this.Authstore.select(selectUsuarioActivoState);
    this.sesionActiva$ = this.Authstore.select(selectSesionActivaState);
  }


  ngOnInit(): void {
 }

 
  editarUsuario(usuario: Usuario ) {
    const dialogRef = this.dialog.open(EditUsuarioComponent, {
      width: '400px',
      data: usuario
    });
   }

   
eliminarUsuario(){
  console.log('prueba eliminar')
}

}
