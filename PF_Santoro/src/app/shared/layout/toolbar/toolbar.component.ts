import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

 cerrarSesion(){
this.AuthService.cerrarSesion();
this.router.navigate(['auth/login'])
  }

  redireccionar(ruta: string) {
    this.router.navigate ([ruta]);
    }

}
