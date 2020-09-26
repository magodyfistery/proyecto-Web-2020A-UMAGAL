import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { CreatArtworkComponent } from './components/creat-artwork/creat-artwork.component';
import { EditArtworkComponent } from './components/edit-artwork/edit-artwork.component';
import { ListArtworkComponent } from './components/list-artwork/list-artwork.component';


@NgModule({
  declarations: [CreatArtworkComponent, EditArtworkComponent, ListArtworkComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ]
})
export class ArtistModule { }
