import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { BdLocalService } from 'src/app/services/bd-local.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Iuser } from 'src/app/interfaces/iuser';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  user: string;
  pass:string;
  formulario: FormGroup;

  
  constructor(public toastController: ToastController, private router: Router, public bdLocal: BdLocalService,private fb: FormBuilder,) {
    this.formulario = this.fb.group({
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]],
     })


  }


 

  segmentChanged(event: any) {
    console.log(event)
    let ruta= event.detail.value
    this.router.navigate(['home/'+ruta])

  }
 
  async toast() {
    const toast = await this.toastController.create({
      message: 'Inició Sesion Correctamente',
      duration: 1000
    });
    toast.present();

    
  }

  
  


  logEvent(event) {
    console.log(event)
}


  
}
