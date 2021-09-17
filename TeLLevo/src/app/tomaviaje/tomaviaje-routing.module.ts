import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomaviajePage } from './tomaviaje.page';

const routes: Routes = [
  {
    path: '',
    component: TomaviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomaviajePageRoutingModule {}
