import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginTenderosComponent } from './login-tenderos.component';

const routes: Routes = [
  { path: '', component: LoginTenderosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginTenderosRoutes{ }