import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotoFormPage } from './voto-form.page';

const routes: Routes = [
  {
    path: '',
    component: VotoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotoFormPageRoutingModule {}
