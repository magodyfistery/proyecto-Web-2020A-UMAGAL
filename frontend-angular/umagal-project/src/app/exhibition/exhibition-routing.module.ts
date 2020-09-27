import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitionComponent } from './components/exhibition/exhibition.component';
import { FairComponent } from './components/fair/fair.component';
import { ExhibitionComponent } from './components/exhibition/exhibition.component';

const routes: Routes = [
  {
    path: 'fairs',
    component: FairComponent
  },
  {
    path: '',
    component: ExhibitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitionRoutingModule { }
