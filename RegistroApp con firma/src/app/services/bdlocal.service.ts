import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Iasistencia } from '../interface/iasistencia';
@Injectable({
  providedIn: 'root'
})
export class BdlocalService {
  
  StorageLocal: Iasistencia[]=[];
  private _storage: Storage | null=null;
  datos: any;

  constructor(private storage: Storage, private toastController: ToastController) {

    this.Init();

   }
  async Init() {
    const storage= await this.storage.create();
    this._storage=storage;
  }
  async cargarStorageLocal(){
    const mistorageLocal= await this.storage.get('datos');
    if(mistorageLocal){
      this.StorageLocal=mistorageLocal;
    }
  }

  mostrar(nombre:string,carrera:string,correo:string){
    
        nombre = localStorage.getItem("nombre");
        carrera = localStorage.getItem("carrera");
        correo = localStorage.getItem("correo");
        /*Mostrar datos almacenados*/      
        

  }

  guardarStorageLocal(nombre:string,carrera:string,correo:string){
    const existe=this.StorageLocal.find(a=>a.nombre==nombre);
    if(!existe){
      this.StorageLocal.unshift({nombre:nombre, carrera:carrera, correo:correo})
      this._storage.set('datos',this.StorageLocal);
      this.msjStorage("Solicitud Enviada")
    }else{
      this.msjStorage("Error, Maximo 1 solicitud diaria por persona")
    }
  }

  async msjStorage(msg:string){
    const toast= await this.toastController.create({
      message:msg,
      duration:2000
    });
    toast.present();
  }

  
}
