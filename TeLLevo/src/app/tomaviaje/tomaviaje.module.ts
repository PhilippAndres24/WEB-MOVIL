import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomaviajePageRoutingModule } from './tomaviaje-routing.module';

import { TomaviajePage } from './tomaviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomaviajePageRoutingModule
  ],
  declarations: [TomaviajePage]
})
export class TomaviajePageModule {}
