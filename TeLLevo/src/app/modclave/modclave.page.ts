import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-modclave',
  templateUrl: './modclave.page.html',
  styleUrls: ['./modclave.page.scss'],
})
export class ModclavePage implements OnInit {

  constructor(public toastController: ToastController) {}

  async modclave() {
    const toast = await this.toastController.create({
      message: 'Se ha modificado Correctamente',
      duration: 1000
    });
    toast.present();
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
  }

}
