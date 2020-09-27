import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { CreatArtworkComponent } from './components/creat-artwork/creat-artwork.component';
import { EditArtworkComponent } from './components/edit-artwork/edit-artwork.component';
import { ListArtworkComponent } from './components/list-artwork/list-artwork.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ViewArtworkComponent } from './components/view-artwork/view-artwork.component';

@NgModule({
  declarations: [CreatArtworkComponent, EditArtworkComponent, ListArtworkComponent, ViewArtworkComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    FormsModule
  ]
})
export class ArtistModule { }
