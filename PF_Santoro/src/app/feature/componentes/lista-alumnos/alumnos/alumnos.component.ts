import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alumnos } from 'src/app/feature/Model/Alumnos';
import { sesion } from 'src/app/feature/Model/sesion';
import { AlumnosService } from '../../../servicios/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos$!: Observable<Alumnos[]>;
  sesion!: sesion;
admin!: boolean;

  constructor(
    private router: Router,
    private AlumnosService: AlumnosService ,
) { }


  ngOnInit(): void {
    this.alumnos$ = this.AlumnosService.obtenerAlumnos();
  }

  redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }

}
