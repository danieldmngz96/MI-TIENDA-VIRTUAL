import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Registro-clientes',
  templateUrl: './Registro-clientes.component.html',
  styleUrls: ['./Registro-clientes.component.scss']
})
export class RegistroClientesComponent implements OnInit {
 // municipios: any[] = []
  departamentos: any = []
  selectedMunicipio = null
  hide = true;
  myForm: FormGroup = this.formBuilder.group({
    celular: ['', Validators.required],
    celular_user_confirm: ['', Validators.required],
    password: ['', Validators.required],
    password_user_confirm: ['', Validators.required],
    name: ['', Validators.required],
  });
  constructor( private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
  }
  register() {
    let body = {
      name: this.myForm.controls['name'].value,
      password: this.myForm.controls['password'].value,
      email: this.myForm.controls['email'].value,
    }
/*     this.registerService.getCompareEmail(body.email).subscribe(data => {
      console.log(data)
      if (data.email == true) {
        Swal.fire({
          icon: 'warning',
          title: 'UPSS...',
          text: `El correo ya esta en uso  ${this.myForm.controls['email'].value}`,
        });
      } else {
        this.registerService.register(body).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title: 'Excelente...',
            text: `Su usuario se a creado ${this.myForm.controls['name'].value} exitosamente!`,
          });
          this.dialogRef.close();
        });
      }
    }); */

  }
  onNoClick(): void {
   // this.dialogRef.close();
  }
}
