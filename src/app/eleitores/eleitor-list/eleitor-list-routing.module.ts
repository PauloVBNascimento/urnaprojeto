import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleitorListPage } from './eleitor-list.page';

const routes: Routes = [
  {
    path: '',
    component: EleitorListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleitorListPageRoutingModule {}
