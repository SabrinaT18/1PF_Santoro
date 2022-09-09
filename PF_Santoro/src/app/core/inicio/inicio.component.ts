import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { Usuario } from 'src/app/feature/Model/Usuario';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuario!: Usuario[];

  constructor(private router: Router, private AuthService: AuthService) { }


  ngOnInit(): void {
 /*    this.AuthService.obtenerSesion().subscribe(
      sesion => {
        if (!sesion.sesionActiva) {
          this.router.navigate(['/auth/login']);
        }
      }) */
  }

  redireccionar(ruta: string) {
    this.router.navigate ([ruta]);
    }

}