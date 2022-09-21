import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../core/servicios/auth.service';
import { SesionState } from '../../../core/state/sesion.reducer';
import { Usuario } from '../../Model/Usuario';
import { UsuariosService } from '../../servicios/usuarios.service';
import { loadUsuarios } from './state/usuario.actions';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private  UsuariosService: UsuariosService ,
    private dialogRef: MatDialogRef<NuevoUsuarioComponent>,
    private store: Store<SesionState>,
    private snackBar: MatSnackBar
    )
    {
    this.formulario = new FormGroup({
    id  : new FormControl(),
    username : new FormControl(),
    email : new FormControl(),
    password: new FormControl(),
    admin: new FormControl(),
    })
   }

  ngOnInit(): void {
  }

 
 cerrar() {
  this.dialogRef.close();
}  

guardar() {
  const u: Usuario = {
    id: this.formulario.value.id,
    username: this.formulario.value.username,
    email:  this.formulario.value.email,
    password:  this.formulario.value.password,
    admin: this.formulario.value.admin,
   }
   this.UsuariosService.agregarUsuario(u).subscribe((usuario) => {
    this.store.dispatch(loadUsuarios());
    this.snackBar.open(`${u.username} fue agregado exitosamente`, 'Ok', {duration: 3000});
    this.cerrar();
  });
  }   

}
