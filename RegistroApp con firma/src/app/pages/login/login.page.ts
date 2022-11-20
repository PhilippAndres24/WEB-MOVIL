import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController, NavController, ToastController } from '@ionic/angular';
import { usuarios } from 'src/app/interface/usuarios';
import { ApiclientService } from 'src/app/services/apiclient.service';
import { __await, __awaiter } from 'tslib';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  alumnos:usuarios[]=[];
 
/*
genero user con usuario y password
*/
existe:any;
user={
  usuario:"",
  password:""
}
  @ViewChild('logo',{read:ElementRef, static:true}) logo: ElementRef;
  constructor(private ApiClientService: ApiclientService, private navCtrl: NavController,private router: Router, private animationCtrl: AnimationController, public toastController: ToastController) { }
 
   
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.ApiClientService.getUsers().subscribe((data)=>{
      console.log(data);
      this.alumnos.push(...data.alumnos);
    })
  }
  ingresarr(){
    this.existe=0;
    for (let aux of this.alumnos) {
      // console.log("userId "+aux.userId);
      // console.log("clave "+aux.clave);
      if(aux.userId==this.user.usuario && aux.clave==this.user.password){
        this.existe=1;
        localStorage.setItem('ingresado','true');
        localStorage.setItem('usuario', aux.nombreAlumno);
        this.navCtrl.navigateRoot('/home');
        return;
      }
    }
    if(this.existe!=1){
      this.mensaje("Credenciales Invalidas");
      this.limpiar();
    }
    }
    
  


  ngAfterViewInit(){
  const  animacion3=this.animationCtrl
      .create()
      .addElement(this.logo.nativeElement)
      .duration(2500)
      .iterations(Infinity)
      .fromTo('opacity', '1', '0.2',);
    animacion3.play();
  }

  
  
  ingresar(){
    if(this.user.usuario=="Pedro" && this.user.password=="123") {
      localStorage.setItem('ingresado','true')
      localStorage.setItem('usuario',this.user.usuario)
      this.navCtrl.navigateRoot('/home');
    }else{
      this.mensaje('Credenciales invalidas usuario/contraseña')
    }
  }
  async mensaje(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration:2500
    });
    toast.present();
  }
  
//https://es.stackoverflow.com/questions/10969/c%C3%B3mo-podr%C3%ADa-recorrer-un-array-de-un-archivo-json

  recuperar(){
    let navigationExtras: NavigationExtras={}
    this.router.navigate(['../contrasena'],navigationExtras);

  }
  limpiar(){
    for(var[key,value] of Object.entries(this.user)){
      Object.defineProperty(this.user,key,{value:""})
    }
  }
  ionViewWillEnter(){
    //Este evento se ejecuta justo antes de cargar la visual de la pagina
    this.limpiar();
  }
}
