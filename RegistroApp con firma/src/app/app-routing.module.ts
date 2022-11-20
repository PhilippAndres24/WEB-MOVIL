import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoingresadoGuard } from './guards/noingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoingresadoGuard]
  },
  {
    path: 'contrasena',
    loadChildren: () => import('./pages/contrasena/contrasena.module').then( m => m.ContrasenaPageModule),
    canActivate:[NoingresadoGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/no-found/no-found.module').then( m => m.NoFoundPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
