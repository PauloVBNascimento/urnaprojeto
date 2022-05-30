import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleitorFormPage } from './eleitor-form.page';

const routes: Routes = [
  {
    path: '',
    component: EleitorFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleitorFormPageRoutingModule {}
