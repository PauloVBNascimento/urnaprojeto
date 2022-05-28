import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotoListPage } from './voto-list.page';

const routes: Routes = [
  {
    path: '',
    component: VotoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotoListPageRoutingModule {}
