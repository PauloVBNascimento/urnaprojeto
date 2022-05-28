import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotoFormPageRoutingModule } from './voto-form-routing.module';

import { VotoFormPage } from './voto-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotoFormPageRoutingModule
  ],
  declarations: [VotoFormPage]
})
export class VotoFormPageModule {}
