import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavigationModule } from '../shared/navigation/navigation.module';
import { SearchComponent } from './search/search.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { VenueCardComponent } from './venue-card/venue-card.component';
import { VenueListComponent } from './venue-list/venue-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    VenueCardComponent,
    VenueListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
    NavigationModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSliderModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCardModule
  ]
})
export class HomeModule { }
