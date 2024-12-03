import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MockupPage } from './mockup.page';

const routes: Routes = [
  {
    path: '',
    component: MockupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MockupPageRoutingModule {}
