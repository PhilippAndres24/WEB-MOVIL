import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Iuser } from '../interfaces/iuser';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {
 

  usuarios: Iuser[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage,public toastController: ToastController, private router: Router) {
    this.init();
    this.cargarUser();
  }
  async cargarUser() {
    const MiUser = await this.storage.get('Iuser');
    if(MiUser){
      this.usuarios=MiUser;
    }
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  registroUser(user:string,pass:string) {

    const existe=this.usuarios.find(c=>c.Strpass===pass);
    if (!existe){
      this.usuarios.unshift({Struser:user,Strpass:pass})
      this._storage.set('Iuser',this.usuarios);
      this.presentToast("Usuario Agregado con exito!")
    }else  {
      this.presentToast("Error: Usuario ya existe, porfavor ingrese otro usuario difente")
    }
  }
  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1000
    });
    toast.present();

    
  }
  

  
  login(user:string,pass:string){
    try{
      
    } catch(e){


    }
  }
    
}

 
 
 
 

 

