import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
n1:any;
n2:1500;
multi:number=0;
  constructor() { }

  ngOnInit() {
  }

  multiplicacion(){
    let Num1=this.n1 ? parseFloat(this.n1) : 0;
    this.multi=Num1*this.n2;
    this.n1="";
  
   
   }
}




