import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SesionState } from 'src/app/core/state/sesion.reducer';
import { Usuario } from 'src/app/feature/Model/Usuario';
import { loadUsuarios } from '../../state/usuario.actions';
import { UsuariosService } from '../../../../servicios/usuarios.service';


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
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
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
