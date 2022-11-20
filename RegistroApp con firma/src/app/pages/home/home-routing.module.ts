import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from 'src/app/components/componente1/componente1.component';
import { Componente2Component } from 'src/app/components/componente2/componente2.component';
import { Componente3Component } from 'src/app/components/componente3/componente3.component';
import { Componente4Component } from 'src/app/components/componente4/componente4.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {

        path: "cp1",
        component: Componente1Component

      },
      {

        path: "cp2",
        component: Componente2Component

      },
      {

        path: "cp3",
        component: Componente3Component

      },
      {
        path: "cp4",
        component: Componente4Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
