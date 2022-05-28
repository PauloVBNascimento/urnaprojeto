import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotoListPageRoutingModule } from './voto-list-routing.module';

import { VotoListPage } from './voto-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotoListPageRoutingModule
  ],
  declarations: [VotoListPage]
})
export class VotoListPageModule {}
