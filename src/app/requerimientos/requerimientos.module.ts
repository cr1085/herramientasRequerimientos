import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequerimientosPageRoutingModule } from './requerimientos-routing.module';

import { RequerimientosPage } from './requerimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequerimientosPageRoutingModule
  ],
  declarations: [RequerimientosPage]
})
export class RequerimientosPageModule {}
