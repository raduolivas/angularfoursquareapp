import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { ProfileComponent } from './profile.component';
import { NavigationModule } from '../shared/navigation/navigation.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    MatIconModule,
  ]
})
export class ProfileModule { }
