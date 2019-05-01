import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntervenantRoutingModule } from './intervenant-routing.module';
import { IntervenantComponent } from './intervenant.component';

@NgModule({
  imports: [
    CommonModule,
    IntervenantRoutingModule
  ],
  declarations: [IntervenantComponent]
})
export class IntervenantModule { }
