import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras} from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component implements OnInit {
data:any;
  constructor(public composer:EmailComposer,private activeroute: ActivatedRoute,private router: Router) {
  this.activeroute.queryParams.subscribe(params=>{
    if(this.router.getCurrentNavigation().extras.state){
      this.data=this.router.getCurrentNavigation().extras.state.user;
    }
  })

  }

  openEmailComposer(){
    this.composer.open({
      to:'demo@demo.com'
    })
  }
  ngOnInit() {}

}
