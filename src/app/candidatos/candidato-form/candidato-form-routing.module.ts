import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatoFormPage } from './candidato-form.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatoFormPageRoutingModule {}
