import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleitorListPageRoutingModule } from './eleitor-list-routing.module';

import { EleitorListPage } from './eleitor-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleitorListPageRoutingModule
  ],
  declarations: [EleitorListPage]
})
export class EleitorListPageModule {}
