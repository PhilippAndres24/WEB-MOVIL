import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { usuarios } from 'src/app/interface/usuarios';
import { ApiclientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.scss'],
})
export class Componente4Component implements OnInit {

  user:any;
  alumnos:usuarios[]=[];
  carreras:any;
  carrera:any={
    id:null,
    alumId:"",
    nomcarrera:""
  }


  constructor(private api: ApiclientService, private toastController: ToastController) { }
  ionViewWillEnter(){
    this.getUsers();
    this.getCarreras();
  }
  ngOnInit() {}

  getUsers(){
    this.api.getUsers().subscribe((data)=>{
      console.log(data);
      this.alumnos.push(...data.alumnos);
    })
  }

  getUser(id){
    this.api.getUser(id).subscribe((data)=>{
      this.user=data;
    })
  }
  getCarreras(){
    this.api.getCarreras().subscribe((data)=>{
      console.log(data);
      this.carreras=data;
    })
  }
  getCarrera(id){
    this.api.getCarrera(id).subscribe((data)=>{
      this.carrera=data;
    })
  }

  guardar(){
    console.log(this.carrera);
    
    if(this.carrera.id==null){
      if(this.user==undefined){
        this.mensaje("No ha seleccionado un usuario!");
        return;
      }
      console.log(this.user)
      this.carrera.alumId=this.user.alumId;
      console.log(this.carrera);
      this.api.createCarreras(this.carrera).subscribe(()=>{
        this.mensaje("Usuario agregado con exito");
        this.getCarreras();
      },
      error=>{
        this.mensaje("Error :"+ error)
      })
    }else{
      //modifica
      this.api.updateCarrera(this.carrera.id,this.carrera).subscribe(
        ()=>{
          this.mensaje("Se actualizo usuario correctamente");
          this.getCarreras();
          this.carrera=null;
        },
        error =>{
          this.mensaje("Error: "+ error)
        });
    }
  }
  seleccionar(f){
    this.carrera=f;
    this.getCarrera(f.alumId);
  }

  eliminar(f){
    this.api.deleteCarrera(f.id).subscribe(
      success=>{
        this.mensaje("Usuario Eliminado!!");
        this.getCarreras();
      },
      error=>{
        this.mensaje("Error: "+ error);
      });
  }




  async mensaje(msg:string){
    const toast= await this.toastController.create({
      message:msg,
      duration: 2000
    });
    toast.present();
  }

  
}
