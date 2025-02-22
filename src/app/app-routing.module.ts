import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'requerimientos',
    loadChildren: () => import('./requerimientos/requerimientos.module').then( m => m.RequerimientosPageModule)
  },
  {
    path: 'mockup',
    loadChildren: () => import('./mockup/mockup.module').then( m => m.MockupPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./inicial/inicial.module').then( m => m.InicialPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
