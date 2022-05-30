import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleitorFormPageRoutingModule } from './eleitor-form-routing.module';

import { EleitorFormPage } from './eleitor-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleitorFormPageRoutingModule
  ],
  declarations: [EleitorFormPage]
})
export class EleitorFormPageModule {}
