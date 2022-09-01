import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/servicios/auth.service';
import { Usuario } from '../../Model/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formulario: FormGroup;
usuario?: Usuario;

  constructor(
    private form: FormBuilder, private router: Router, private AuthService: AuthService  ){

    this.formulario = form.group({
      email: new FormControl ('sabrina@mail.com', [Validators.required, Validators.email]),
      password: new FormControl ('12345678', [Validators.required, Validators.minLength(8)]),
      admin: new FormControl('true'),
      canActivateChild: new FormControl('true'),
      canLoad: new FormControl('true'),
      canDeactivate:new FormControl('true') ,  
      id: ('0') ,
      username: new FormControl ('sabrina' )
    });
      }
      
  ngOnInit(): void {
  }

  enviar(){
    console.log(this.formulario);
  }

  onLogin(){
  const usuario: Usuario = {
    email: this.formulario.value.email,
    password: this.formulario.value.password,
    admin: this.formulario.value.admin,
    canActivateChild: this.formulario.value.canActivateChild,
    canLoad: this.formulario.value.canLoad,
    canDeactivate: this.formulario.value.canDeactivate,
    id: this.formulario.value.id,
    username: this.formulario.value.username,
  }
    this.AuthService.IniciarSesion(usuario);
    this.router.navigate(['/inicio']);
    
    }
  }          
  
  


