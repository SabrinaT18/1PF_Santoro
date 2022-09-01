import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthService) { }


  ngOnInit(): void {
    this.AuthService.obtenerSesion().subscribe(
      sesion => {
        if (!sesion.sesionActiva) {
          this.router.navigate(['/auth/login']);
        }
      })
  }

}
