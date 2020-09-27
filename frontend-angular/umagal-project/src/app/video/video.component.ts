import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Artist } from '../core/models/artist.model';
import { VideosService } from '../core/services/video/videos.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  dangerousVideoUrl: string
  videosArtista:Array<SafeResourceUrl> = []
  videosUrl = []
  artists: Array<Artist> 
  

  constructor(
    private videoService: VideosService,
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getVideos()
  }

  getVideos(){
    this.videoService.getVideos()
      .subscribe(response => {
        if(response.body.status == 1){
          if(response.body.data.length > 0){
            this.artists = response.body.data;
            for(var artist in this.artists){
              this.videosArtista=[]
              for(var video in this.artists[artist].videos){
                this.videosArtista.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.artists[artist].videos[video].url))
              }
              this.videosUrl.push(this.videosArtista)
            }
            console.log(this.videosUrl);
            
          }else{
            alert("No hay videos de artistas")
          }
            // pueden venir muchas ferias
        }

      });
      
  }
}
