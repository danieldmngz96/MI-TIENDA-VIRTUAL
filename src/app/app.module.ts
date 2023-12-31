import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerModule } from './shared/banner/banner.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { MatDialogModule } from '@angular/material/dialog';

import { RouterModule } from '@angular/router';
import { FooterModule } from './shared/footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginTenderosComponent } from './modules/Tendero/login-tenderos/login-tenderos.component';
import { LoginClientesComponent } from './modules/Clientes/login-clientes/login-clientes.component';
import { LandingComponent } from './modules/landing/landing.component';
import { RegistroTenderosComponent } from './modules/Registro-tenderos/Registro-tenderos.component';
import { RegistroClientesComponent } from './modules/Registro-clientes/Registro-clientes.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginClientesComponent,
    LoginTenderosComponent,
    LandingComponent,
    RegistroTenderosComponent,
    RegistroClientesComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BannerModule,
    FooterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
