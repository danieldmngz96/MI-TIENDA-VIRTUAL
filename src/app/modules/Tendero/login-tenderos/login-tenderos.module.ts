import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTenderosComponent } from './login-tenderos.component';
import { BannerModule } from '../../../shared/banner/banner.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LoginTenderosRoutes } from './login-tenderos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    BannerModule,
    MaterialModule,
    LoginTenderosRoutes
  ],
  declarations: [LoginTenderosComponent ],
  exports: [LoginTenderosComponent ]
})
export class LoginTenderosModule { }
