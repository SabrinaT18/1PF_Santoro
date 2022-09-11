import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Alumnos } from 'src/app/feature/Model/Alumnos';
import { AlumnosService } from '../../../servicios/alumnos.service';
import { AuthService } from '../../../../core/servicios/auth.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NuevoAlumnoComponent } from '../nuevo-alumno/nuevo-alumno.component';
import { ABMalumnosComponent } from '../editar-alumnos/abmalumnos.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { alumnosState } from '../state/alumnos.reducer';
import { selectCargandoState } from '../state/alumnos.selectors';
import { loadAlumnos } from '../state/alumnos.actions';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  cargando$!: Observable<boolean>;

  constructor(
    private AlumnosService: AlumnosService,
    private router: Router,
    private store: Store<alumnosState>
  ) { }


  ngOnInit(): void {
    this.store.dispatch(loadAlumnos());
    this.cargando$ = this.store.select(selectCargandoState);
  };

  redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }

}
