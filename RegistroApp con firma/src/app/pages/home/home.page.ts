import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, NavController, ToastController } from '@ionic/angular';
import { usuarios } from 'src/app/interface/usuarios';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alumnos:usuarios[]=[];
  //Declaro una variable para entregarle cualquier cosa
  data=localStorage.getItem('usuario');  //"Any" Permite cualquier valor

    //declarar un elemento que está en el DOM y que deseo animar
  @ViewChild('miAnimacion',{read:ElementRef, static:true}) miAnimacion: ElementRef;

  //para recibir parámetros desde otra page, necesito Router y ActivatedRouter
  constructor(private navCtrl: NavController, private activeroute: ActivatedRoute, private router: Router, private animationCtrl: AnimationController, private toastController: ToastController){
    // this.activeroute.queryParams.subscribe(params=>{
    //   if(this.router.getCurrentNavigation().extras.state){
    //     this.data=this.router.getCurrentNavigation().extras.state.user;
    //   }
    // })
  }
  async mensaje(){
    const toast = await this.toastController.create({
      message: 'Generando QR..',
      duration:2500
    });
    toast.present();
  }
  async mensaje2(){
    const toast = await this.toastController.create({
      message: 'Capturando QR..',
      duration:2500
    });
    toast.present();
  }
    //Metodo que se levanta ? de la visualización. 
    ngAfterViewInit(){
    this.router.navigate(['home/cp1']);
    const animacion1=this.animationCtrl
    .create()
    .addElement(this.miAnimacion.nativeElement)
    .duration(3000)
    .iterations(Infinity)
    .keyframes([
      {offset: 0, background: 'yellow'},
      {offset: 0.72, background: 'var(--background)'},
      {offset: 1, background: 'green'}
    ]);
    
    const animacion2=this.animationCtrl
    .create()
    .addElement(this.miAnimacion.nativeElement)
    .duration(3000)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(0px)','translateX(50px)')
    .fromTo('opacity','1','0.7');
    
    const animacion=this.animationCtrl
    .create()
    .addElement(this.miAnimacion.nativeElement)
    .duration(2500)
    .iterations(Infinity)
    .addAnimation([animacion1,animacion2])
    // animacion.play();
  }

  segmentChanged(event: any){
    let direccion= event.detail.value
    console.log(event.detail.value)
    this.router.navigate(['home/'+direccion])
  }

  salir(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login')
  }
}
