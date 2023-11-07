import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginClientesComponent } from './login-clientes.component';

const routes: Routes = [
  { path: '', component: LoginClientesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginClientesRoutes{ }