import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from '../home/home.module';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ProfileModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
