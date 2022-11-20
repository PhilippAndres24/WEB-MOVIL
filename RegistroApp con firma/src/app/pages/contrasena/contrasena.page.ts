import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { usuarios } from 'src/app/interface/usuarios';
import { ApiclientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {
  alumnos:usuarios[]=[];
  existe:any;
  user={
    usuario:"",
    password:""
  }
  constructor(private navCtrl:NavController,private ApiClientService: ApiclientService,public toastController: ToastController) {
   }
   async mensaje(msg:string){
    const toast = await this.toastController.create({
      message: msg,
      duration:2500
    });
    toast.present();
  }
  getUsers(){
    this.ApiClientService.getUsers().subscribe((data)=>{
      console.log(data);
      this.alumnos.push(...data.alumnos);
    })
   }
  ngOnInit() {
    this.getUsers();
  }
  ingresarr(){
    // this.existe=0;
    for (let aux of this.alumnos) {
      // console.log("userId "+aux.userId);
      // console.log("clave "+aux.clave);
      if(aux.userId==this.user.usuario){
        console.log(this.user.usuario);
        // this.existe=1;
        this.navCtrl.navigateRoot('/login');
        this.mensaje("Se ha enviado un correo para restablecer contraseña")
        return;
      }
    }
    if(this.existe!=1){
      this.mensaje("Usuario no existe");

      this.limpiar();
    }
    }
  
  limpiar(){
    for(var[key,value] of Object.entries(this.user)){
      Object.defineProperty(this.user,key,{value:""})
    }
  }
}
