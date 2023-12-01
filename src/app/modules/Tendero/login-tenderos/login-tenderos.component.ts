import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-tenderos',
  templateUrl: './login-tenderos.component.html',
  styleUrls: ['./login-tenderos.component.scss']
})
export class LoginTenderosComponent implements OnInit {
  fecha = new Date();
  loginForm!: FormGroup;
  hide = true;
  onlyEfequiposEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  constructor( private router: Router,) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('',
      ),
    });
  }

  onRegister() {
    this.router.navigate(['/Register']);
    /* const dialogRef = this.dialog.open(RegistroComponent, {
      width: '40%',
    }); */
  }
  login() {
    let body = {
      correo: this.loginForm.controls['username'].value,
      clave: this.loginForm.controls['password'].value,
    };
    console.log(body);

/*     this.service.login(body).subscribe((resp: any) => {
      console.log(typeof(resp), resp);
      if(typeof(resp.user) === 'string'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Correo o contraseña invalida!',
        });
        localStorage.clear();
      } else if(typeof(resp.user) === 'object'){
        console.log('login...', resp);
        localStorage.setItem("user", JSON.stringify(resp.user));
        this.router.navigate(['/bienvenido'])
      }
    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Correo o contraseña invalida!',
      });
    }); */
  }
  
}
