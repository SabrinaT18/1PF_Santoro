import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/servicios/auth.service';
import { cerrarSesion } from 'src/app/core/state/sesion.actions';
import { SesionState } from 'src/app/core/state/sesion.reducer';
import { selectUsuarioAdminState } from 'src/app/core/state/sesion.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
usuarioAdmin$!: Observable<boolean| undefined>;

constructor( public router: Router ,
   private authService: AuthService,     
   private Authstore: Store<SesionState>)
{  
 }

 ngOnInit(): void{
  this.usuarioAdmin$ = this.Authstore.select(selectUsuarioAdminState);
 }

   redireccionar(ruta: string) {
   this.router.navigate ([ruta]);
   }

   cerrarSesion(){
    this.Authstore.dispatch(cerrarSesion());
    this.router.navigate(['auth/login'])
      }

      
}




