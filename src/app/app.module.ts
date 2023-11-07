import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerModule } from './shared/banner/banner.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterModule } from './shared/footer/footer.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FooterModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
