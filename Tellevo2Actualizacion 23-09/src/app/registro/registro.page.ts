import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  
  constructor(public toastController: ToastController) {}

  async registro() {
    const toast = await this.toastController.create({
      message: 'Se ha registrado Exitosamente',
      duration: 1000
    });
    toast.present();
  }
  
  ngOnInit() {
  }

}
