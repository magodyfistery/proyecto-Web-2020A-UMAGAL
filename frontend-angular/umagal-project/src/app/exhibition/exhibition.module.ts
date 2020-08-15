import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FairComponent } from './components/fair/fair.component';
import { ExhibitionRoutingModule } from './exhibition-routing.module';
import { MaterialModule } from '../material/material.module';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FairComponent],
  imports: [
    CommonModule,
    ExhibitionRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule,
  ]
})
export class ExhibitionModule { }
