import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'candidatos',
    pathMatch: 'full'
  },
  {
    path: 'candidatos',
    loadChildren: () => import('./candidatos/candidato-list/candidato-list.module').then( m => m.CandidatoListPageModule)
  },
  {
    path: 'candidatos/new',
    loadChildren: () => import('./candidatos/candidato-form/candidato-form.module').then( m => m.CandidatoFormPageModule)
  },
  {
    path: 'candidatos/edit/:id_c',
    loadChildren: () => import('./candidatos/candidato-form/candidato-form.module').then( m => m.CandidatoFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
