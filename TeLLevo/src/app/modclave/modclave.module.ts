import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModclavePageRoutingModule } from './modclave-routing.module';

import { ModclavePage } from './modclave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModclavePageRoutingModule
  ],
  declarations: [ModclavePage]
})
export class ModclavePageModule {}
