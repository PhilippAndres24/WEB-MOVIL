import { Component, OnInit,ViewChild  } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(public toastController: ToastController) {}

  async cerrrasesion() {
    const toast = await this.toastController.create({
      message: 'Se ha cerrado la sesion con exito!',
      duration: 1000
    });
    toast.present();
  }
  

  ngOnInit() {
  }

}
