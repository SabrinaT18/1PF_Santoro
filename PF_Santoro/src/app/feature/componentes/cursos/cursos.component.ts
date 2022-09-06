import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cursos } from '../../Model/Cursos';
import { CursosService } from '../../servicios/cursos.service';
import { sesion } from '../../Model/sesion';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
  cursos$!: Observable<Cursos[]>;
  sesion!: sesion;
admin!: boolean;

  constructor(
private router: Router,
    private CursosService: CursosService,
) { }


  ngOnInit(): void {
    this.cursos$ = this.CursosService.obtenerCursos()
  }

  redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }

/*   isAdmin(){
 if (this.AuthService.obtenerSesion(){
 } return true
}else{
  return false}  */

}









