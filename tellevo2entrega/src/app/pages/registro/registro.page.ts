import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user: string;
  pass:string;

  form: FormGroup;

  constructor(public toastController: ToastController, public bdLocal: BdLocalService, private formBuilder: FormBuilder) {
    this.buildForm();
  }
 

  async toast() {
    const toast = await this.toastController.create({
      message: 'Usuario Se ha registrado Correctamente',
      duration: 1000
    });
    toast.present();

  }


  ngOnInit() {
  }
  private buildForm() {

    this.form = this.formBuilder.group({
      user: ['', [Validators.required]],
      num: ['', [Validators.required]],
      email: ['', [Validators.email,Validators.maxLength(100)]],
      pass: ['', [Validators.maxLength(200)]],
      
    });


  
  }

save(event: Event){
  event.preventDefault();
  const value= this.form.value;
  console.log(value);
}

guardar(){
  this.bdLocal.registroUser(this.user,this.pass);
}

}



