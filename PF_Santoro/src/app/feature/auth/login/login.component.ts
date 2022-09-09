import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/servicios/auth.service';
import { Usuario } from '../../Model/Usuario';
import { Store } from '@ngrx/store';
import { SesionState } from 'src/app/core/state/sesion.reducer';
import { cargarSesion } from 'src/app/core/state/sesion.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formulario: FormGroup;
usuario?: Usuario;

  constructor(
    private form: FormBuilder, private router: Router, 
    private AuthService: AuthService, private store: Store<SesionState> ){

    this.formulario = form.group({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(8)]),
      });
      }
      
  ngOnInit(): void {
  }

  onLogin(){
    this.AuthService.IniciarSesion(this.formulario.value.email, this.formulario.value.password).subscribe((usuario: Usuario) => {
      this.store.dispatch(cargarSesion({
        usuarioActivo: usuario
      }));
     this.router.navigate(['/inicio']); 
     });
    }

  }



            
  
  


