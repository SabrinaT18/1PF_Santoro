import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/servicios/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/feature/Model/Usuario';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
usuario$!: Observable<Usuario[]>;

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

 loginDisplay()   {
   this.AuthService.obtenerSesion();
    console.log(this.usuario$);
  }
   

 cerrarSesion(){
this.AuthService.cerrarSesion();
this.router.navigate(['auth/login'])
  }

  redireccionar(ruta: string) {
    this.router.navigate ([ruta]);
    }

}
