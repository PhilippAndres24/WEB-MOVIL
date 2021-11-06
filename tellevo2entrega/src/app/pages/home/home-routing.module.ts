import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      
  {   path: 'uno',
    
  },
  // aca coloco mi componente dos sino me puede arrojar notfound

]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
