import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionState } from 'src/app/core/state/sesion.reducer';
import { selectUsuarioActivoState, selectUsuarioAdminState } from 'src/app/core/state/sesion.selectors';
import { Usuario } from 'src/app/feature/Model/Usuario';

@Component({
  selector: 'app-perfil-activo',
  templateUrl: './perfil-activo.component.html',
  styleUrls: ['./perfil-activo.component.css']
})
export class PerfilActivoComponent implements OnInit {
  usuarioActivo$!: Observable<Usuario | undefined>;
  usuarioAdmin$!: Observable<boolean| undefined>;


  constructor(
    private Authstore: Store<SesionState>,
    public store: Store,

  ) { 
    this.usuarioActivo$ = this.Authstore.select(selectUsuarioActivoState);
    this.usuarioAdmin$ = this.Authstore.select(selectUsuarioAdminState);
    }


  ngOnInit(): void {  
}

 

}





