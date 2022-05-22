import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatoFormPageRoutingModule } from './candidato-form-routing.module';

import { CandidatoFormPage } from './candidato-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatoFormPageRoutingModule
  ],
  declarations: [CandidatoFormPage]
})
export class CandidatoFormPageModule {}
