import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { MaterialModule } from './material/material.module';
import { VideoComponent } from './video/video.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ArtistModule } from './artist/artist.module';
import { GalleryComponent } from './gallery/gallery.component';
import { OurArtistsComponent } from './our-artists/our-artists.component';




@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    PageNotFoundComponent,
    ContactComponent,
    VideoComponent,
    GalleryComponent,
    OurArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    ArtistModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
