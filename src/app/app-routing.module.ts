import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginTenderosComponent } from './modules/Tendero/login-tenderos/login-tenderos.component';
import { LoginClientesComponent } from './modules/Clientes/login-clientes/login-clientes.component';

const routes: Routes = [
  {
    path: '',
    component: LoginClientesComponent,
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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
