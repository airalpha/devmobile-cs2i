import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditDataPageRoutingModule } from './add-edit-data-routing.module';

import { AddEditDataPage } from './add-edit-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEditDataPageRoutingModule
  ],
  declarations: [AddEditDataPage]
})
export class AddEditDataPageModule {}
