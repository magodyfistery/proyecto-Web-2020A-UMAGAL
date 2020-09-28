import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../core/services/artwork/artwork.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public artworks: []
  constructor(
    private artworkService: ArtworkService
  ) { }

  ngOnInit(): void {
    this.artworkService.getProjects()
      .subscribe((response)=>{
        console.log("GALLERY", response)
        if(response.projects){
          this.artworks=response.projects;
        }

      })
  }

}
