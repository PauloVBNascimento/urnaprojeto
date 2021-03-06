import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicial',
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
  {
    path: 'candidatos/votos',
    loadChildren: () => import('./candidatos/voto-list/voto-list.module').then( m => m.VotoListPageModule)
  },
  {
    path: 'candidatos/newv',
    loadChildren: () => import('./candidatos/voto-form/voto-form.module').then( m => m.VotoFormPageModule)
  },
  {
    path: 'candidatos/editv/:numero_c',
    loadChildren: () => import('./candidatos/voto-form/voto-form.module').then( m => m.VotoFormPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./candidatos/inicial/inicial.module').then( m => m.InicialPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./candidatos/sobre/sobre.module').then( m => m.SobrePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
