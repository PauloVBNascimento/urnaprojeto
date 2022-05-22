import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatoListPage } from './candidato-list.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatoListPageRoutingModule {}
