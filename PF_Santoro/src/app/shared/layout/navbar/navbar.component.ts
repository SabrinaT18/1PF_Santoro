import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor( public router: Router ,
   private authService: AuthService) {   
 }

   redireccionar(ruta: string) {
   this.router.navigate ([ruta]);
   }

   cerrarSesion(){
    this.authService.cerrarSesion();
    this.router.navigate(['auth/login'])
      }

}




