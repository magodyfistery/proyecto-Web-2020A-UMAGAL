import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FairComponent } from './components/fair/fair.component';
import { ExhibitionComponent } from './components/exhibition/exhibition.component';

const routes: Routes = [
  {
    path: 'fairs',
    component: FairComponent
  },
  {
    path: 'exhibition',
    component: ExhibitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitionRoutingModule { }
