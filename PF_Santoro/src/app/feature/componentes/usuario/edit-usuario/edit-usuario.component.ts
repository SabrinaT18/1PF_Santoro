import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Usuario } from '../../../Model/Usuario';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { loadUsuarios } from '../../../auth/nuevo-usuario/state/usuario.actions';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public element: Usuario ,
    private dialogRef: MatDialogRef<EditUsuarioComponent>,
    private UsuariosService: UsuariosService,
    private store: Store,
    private snackBar: MatSnackBar,
    private formU: FormBuilder,
  ) {  
    
    this.formulario = formU.group ({
      id  : new FormControl(),
      username : new FormControl(),
      email : new FormControl(),
      password: new FormControl(),
      admin: new FormControl(),
  })}

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
  this.UsuariosService.editarUsuario(u).subscribe((usuario) => {
    this.store.dispatch(loadUsuarios());
    this.snackBar.open(`${u.username} fue editado correctamente`, 'Ok', { duration: 3000 });
    this.cerrar();
  });
  

}

eliminarUsuario(){
  
}


}