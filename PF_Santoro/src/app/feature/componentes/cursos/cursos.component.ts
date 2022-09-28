import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CursosService } from '../../servicios/cursos.service';
import { CursosState } from './state/cursos.reducer';
import { Store } from '@ngrx/store';
import { loadCursoss } from './state/cursos.actions';
import { selectCargandoState } from './state/cursos.selectors';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
  cargando$!: Observable<boolean>;

  constructor(
    private router: Router,
    private CursosService: CursosService,
    private store: Store<CursosState>
  ) { }


  ngOnInit(): void {
    this.store.dispatch(loadCursoss());
    this.cargando$ = this.store.select(selectCargandoState);
  }

  redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }


}









