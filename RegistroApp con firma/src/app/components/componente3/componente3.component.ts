import { Component, OnInit } from '@angular/core';
import { BdlocalService } from 'src/app/services/bdlocal.service';
import { Iasistencia } from 'src/app/interface/iasistencia';
@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.scss'],
})
export class Componente3Component implements OnInit {
  alumnos:Iasistencia[]=[];
  constructor( public bdLocalService: BdlocalService) { }
  nombre:string;
  carrera:string;
  correo:string;

  ngOnInit() {
    this.bdLocalService.cargarStorageLocal()
  }

  

  enviar(){

      this.bdLocalService.guardarStorageLocal(this.nombre,this.carrera,this.correo)
  }

}
