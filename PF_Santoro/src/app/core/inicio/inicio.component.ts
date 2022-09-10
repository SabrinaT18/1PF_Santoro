import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Usuario } from 'src/app/feature/Model/Usuario';
import { AuthService } from '../servicios/auth.service';
import { SesionState } from '../state/sesion.reducer';
import { selectUsuarioActivoState } from '../state/sesion.selectors';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuarioActivo$: Observable<Usuario | undefined>;

  constructor(private router: Router, private AuthService: AuthService,
    private store: Store<SesionState>,
    ) { 
      this.usuarioActivo$ = this.store.select(selectUsuarioActivoState);

    }


  ngOnInit(): void {
  }

  redireccionar(ruta: string) {
    this.router.navigate ([ruta]);
    }

}