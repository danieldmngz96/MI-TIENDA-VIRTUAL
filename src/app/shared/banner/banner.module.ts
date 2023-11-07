import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [BannerComponent],
  exports: [BannerComponent]
})
export class BannerModule { }
