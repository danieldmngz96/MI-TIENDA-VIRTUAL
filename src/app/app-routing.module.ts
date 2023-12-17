import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginTenderosComponent } from './modules/Tendero/login-tenderos/login-tenderos.component';
import { LoginClientesComponent } from './modules/Clientes/login-clientes/login-clientes.component';
import { LandingComponent } from './modules/landing/landing.component';
import { RegistroTenderosComponent } from './modules/Registro-tenderos/Registro-tenderos.component';
import { RegistroClientesComponent } from './modules/Registro-clientes/Registro-clientes.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'home',
        redirectTo: '/',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login-clientes',
    component: LoginClientesComponent,
  },
  {
    path: 'login-tenderos',
    component: LoginTenderosComponent,
  },
  {
    path: 'register-tenderos',
    component: RegistroTenderosComponent,
  },
  {
    path: 'register-clientes',
    component: RegistroClientesComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
