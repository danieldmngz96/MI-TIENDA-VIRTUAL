import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginClientesService } from '../../../services/loginClientes.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-clientes',
  templateUrl: './login-clientes.component.html',
  styleUrls: ['./login-clientes.component.scss']
})
export class LoginClientesComponent implements OnInit {
  fecha = new Date();
  loginForm!: FormGroup;
  hide = true;


  constructor(private router: Router,
    private service: LoginClientesService,) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      celular: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
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
      celular: this.loginForm.controls['celular'].value,
      PIN: this.loginForm.controls['password'].value,
    };
    console.log(body);

     this.service.login(body).subscribe((resp: any) => {
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
        this.router.navigate(['/'])
      }
    }, (error: any) => {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Error de servidor!',
      });
    }); 
  }

  validateFormat(event:any) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
     if (!regex.test(key)) {
      event.returnValue = false;
       if (event.preventDefault) {
        event.preventDefault();
       }
     }
    }
    
}
