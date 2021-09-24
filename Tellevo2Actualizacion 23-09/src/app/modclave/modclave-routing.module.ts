import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModclavePage } from './modclave.page';

const routes: Routes = [
  {
    path: '',
    component: ModclavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModclavePageRoutingModule {}
