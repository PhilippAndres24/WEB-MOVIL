import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IonicStorageModule } from '@ionic/storage-angular';

import { BdLocalService } from './services/bd-local.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [ ReactiveFormsModule,FormsModule,BrowserModule,IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,MatSliderModule, NgbModule,IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }],
  bootstrap: [AppComponent,],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
 
  
})
export class AppModule {}
