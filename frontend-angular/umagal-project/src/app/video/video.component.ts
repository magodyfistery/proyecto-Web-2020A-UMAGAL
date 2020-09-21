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
  videoUrl: SafeResourceUrl
  xd: string
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
        console.log("Hola")
        if(response.body.status == 1){
          if(response.body.data.length > 0){
            this.artists = response.body.data;
            for(var artist in this.artists){
              for(var video in this.artists[artist].videos){
                this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.artists[artist].videos[video].url);
              }
            }
            console.log(this.videoUrl)
          }else{
            alert("No hay videos de artistas")
          }
            // pueden venir muchas ferias
        }

      });
  }
  updateVideoUrl(url: string) {
    this.dangerousVideoUrl = url;
    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

}
