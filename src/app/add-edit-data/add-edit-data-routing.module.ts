import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditDataPage } from './add-edit-data.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditDataPageRoutingModule {}
