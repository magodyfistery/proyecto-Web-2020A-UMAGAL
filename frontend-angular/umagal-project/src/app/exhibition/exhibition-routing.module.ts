import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FairComponent } from './components/fair/fair.component';


const routes: Routes = [
  {
    path: 'fairs',
    component: FairComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitionRoutingModule { }
