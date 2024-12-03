import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MockupPageRoutingModule } from './mockup-routing.module';

import { MockupPage } from './mockup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MockupPageRoutingModule
  ],
  declarations: [MockupPage]
})
export class MockupPageModule {}
