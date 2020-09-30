import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ManageFairsComponent } from './components/manage-fairs/manage-fairs.component';
import { EditFairComponent } from './components/edit-fair/edit-fair.component';
import { CreateFairComponent } from './components/create-fair/create-fair.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, ManageFairsComponent, EditFairComponent, CreateFairComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
