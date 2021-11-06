import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { FormControl } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatSliderModule,
    ReactiveFormsModule,
    
    
    
  ],
  declarations: [HomePage,]
})
export class HomePageModule {

  name = new FormControl('');

}

