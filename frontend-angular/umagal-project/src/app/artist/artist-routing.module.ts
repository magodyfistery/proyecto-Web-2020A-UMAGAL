import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatArtworkComponent } from './components/creat-artwork/creat-artwork.component';
import { EditArtworkComponent } from './components/edit-artwork/edit-artwork.component';
import { ListArtworkComponent } from './components/list-artwork/list-artwork.component';
import { ViewArtworkComponent } from './components/view-artwork/view-artwork.component';

const routes: Routes = [
  {
    path: '',
    component: CreatArtworkComponent
  },
  {
    path: 'artwork',
    component: CreatArtworkComponent
  },
  {
    path: 'editArtwork/:id',
    component: EditArtworkComponent
  },
  {
    path: 'viewArtwork/:id',
    component: ViewArtworkComponent
  },
  {
    path: 'listArtwork',
    component: ListArtworkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
