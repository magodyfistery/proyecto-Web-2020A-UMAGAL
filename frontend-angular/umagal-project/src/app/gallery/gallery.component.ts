import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../core/services/artwork/artwork.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class GalleryComponent implements OnInit {

  public artworks: []
  show = false;

 get stateName() {
   return this.show ? 'show' : 'hide'
 }

  constructor(
    private artworkService: ArtworkService
  ) { }

  ngOnInit(): void {
    this.artworkService.getProjects()
      .subscribe((response)=>{
        console.log("GALLERY", response)
        if(response.projects){
          this.artworks=response.projects;
          this.show = true;
        }

      })
  }

}
