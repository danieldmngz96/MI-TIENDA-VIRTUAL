import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginClientesComponent } from './login-clientes.component';
import { BannerComponent } from 'src/app/shared/banner/banner.component';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LoginClientesRoutes } from './login-clientes.routing.module';

@NgModule({
  imports: [
    CommonModule,
    BannerModule,
    MaterialModule,
    LoginClientesRoutes
  ],
  declarations: [LoginClientesComponent ]
})
export class LoginClientesModule { }
