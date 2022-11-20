import { Component, OnInit } from '@angular/core';
import { BarcodeScanner,BarcodeScannerOptions  } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { qr } from 'src/app/interface/usuarios';
@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss'],
})
export class Componente2Component implements OnInit {
  datoscaneado: {};
  datocodificado: any;
  constructor(public composer:EmailComposer,private barcodeScanner: BarcodeScanner) { }
  
  ngOnInit() {}


  LeerCodigo(){
    this.barcodeScanner.scan().then(barcodeData=>{
      this.datoscaneado = barcodeData;
      const valor =JSON.parse(barcodeData.text)
      this.composer.open({
        to: valor.correo ,
        subject: 'Asistencia por confirmar| Seccion: '+valor.idAsignatura+'_'+valor.seccion,
        body: 'Asistencia confirmada | Seccion:'+valor.idAsignatura+'_'+valor.seccion+' Asignatura: '+valor.asignatura+
        ', N° clase: '+valor.idClase+', Docente: '+valor.docente
      })
    }) 
    
    .catch(err => {
      console.log("Error", err);
    })
  }

}
