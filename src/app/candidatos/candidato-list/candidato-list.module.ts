import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatoListPageRoutingModule } from './candidato-list-routing.module';

import { CandidatoListPage } from './candidato-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatoListPageRoutingModule
  ],
  declarations: [CandidatoListPage]
})
export class CandidatoListPageModule {}
