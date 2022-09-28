import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/feature/Model/Usuario';
import { UsuariosService } from '../../../../servicios/usuarios.service';
import { selectUsuariosCargadosState } from '../../state/usuario.selectors';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {
  data$!: Observable<Usuario[] | undefined>;

  constructor(
    public dialogRef: MatDialogRef<VerUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.data$ = this.store.select(selectUsuariosCargadosState);
    }


  cerrar() {
    this.dialogRef.close();
  }
}
