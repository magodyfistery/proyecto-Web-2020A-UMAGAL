import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ManageFairsComponent } from './components/manage-fairs/manage-fairs.component';
import { EditFairComponent } from './components/edit-fair/edit-fair.component';
import { CreateFairComponent } from './components/create-fair/create-fair.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'manage-fairs',
    component: ManageFairsComponent
  },
  {  
    path: 'create-fair',
    component: CreateFairComponent
  },
  {
    path: 'edit-fair',
    component: EditFairComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
