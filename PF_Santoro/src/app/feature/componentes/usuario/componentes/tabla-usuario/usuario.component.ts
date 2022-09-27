import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { AuthService } from "src/app/core/servicios/auth.service";
import { SesionState } from "src/app/core/state/sesion.reducer";
import { selectUsuarioActivoState, selectUsuarioAdminState } from "src/app/core/state/sesion.selectors";
import { Usuario } from "src/app/feature/Model/Usuario";
import { EditUsuarioComponent } from "../edit-usuario/edit-usuario.component";
import { UsuariosService } from '../../../../servicios/usuarios.service';
import { MatTable } from "@angular/material/table";
import { selectUsuariosCargadosState, selectCargandoUsuarios } from '../../state/usuario.selectors';
import { loadUsuarios, usuariosCargados } from "../../state/usuario.actions";
import { VerUsuariosComponent } from "../ver-usuarios/ver-usuarios.component";
import { NuevoUsuarioComponent } from '../nuevo-usuario/nuevo-usuario.component';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioAdmin$!: Observable<boolean | undefined>;

  usuarios$!: Observable<Usuario[] | undefined>;
  usuSubscripcion!: Subscription;
  data$!: Observable<Usuario[]>;


  displayedColumns: string[] = ['id', 'username', 'email', 'password', 'admin', 'Acciones'];
  @ViewChild(MatTable) tabla!: MatTable<Usuario>;

  constructor(
    private dialog: MatDialog,
    private Authstore: Store<SesionState>,
    public store: Store,
    private UsuariosService: UsuariosService,
    private snackBar: MatSnackBar,
  ) {    
    
  }

  ngOnInit(): void {
    this.usuarios$ = this.store.select(selectUsuariosCargadosState);

    this.usuarioAdmin$ = this.Authstore.select(selectUsuarioAdminState);


    this.data$ = this.UsuariosService.obtenerUsuarios();
    this.usuSubscripcion = this.UsuariosService.usuarioSubject.subscribe(
      (data) => {
        this.store.dispatch(usuariosCargados({ usuarios: data }));
      }
    );
  }

  ngOnDestroy(): void {
    this.usuSubscripcion.unsubscribe()
  }

  verDetalle (usuario: Usuario ) {
    const dialogRef = this.dialog.open(VerUsuariosComponent, {
      width: '400px',
      data: usuario
    });  
  }

  agregarUsuario() {
    const dialogRef = this.dialog.open(NuevoUsuarioComponent,  {
      width: '400px',
      data: this.usuarios$
    });
    }

  editarUsuario(element: Usuario) {
    const dialogRef = this.dialog.open(EditUsuarioComponent, {
      width: '400px',
      data: element
    });
  }

  eliminarUsuario(id: number) {
    this.UsuariosService.eliminarUsuario(id).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadUsuarios());
      this.snackBar.open(`${usuario.id}-${usuario.username} El usuario fue eliminado exitosamente`, 'Ok', { duration: 3000 });
    })
  }

}




