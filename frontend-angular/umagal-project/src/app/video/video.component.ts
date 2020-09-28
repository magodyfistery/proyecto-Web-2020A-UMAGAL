import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosService } from '../core/services/video/videos.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  dangerousVideoUrl: string
  videosUrl = []
  public artists = [

  ]


  constructor(
    private videoService: VideosService,
    private sanitizer:DomSanitizer
  )
  {

  }

  ngOnInit(): void {
    this.getVideos()
  }

  sanitizeURL(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getVideos(){
    this.videoService.getVideos()
      .subscribe(response => {
        if(response.body.status == 1){
          if(response.body.data.length > 0){
            this.artists = response.body.data;
            console.log("ARTISTAS", this.artists)

            for(var i=0; i< this.artists.length; i++){

              this.videosUrl.push([])

              for(var j=0; j< this.artists[i].videos.length; j++){

                // https://www.youtube.com/watch?v=tp8-VK56O90
                const url = this.artists[i].videos[j].url.replace("https://www.youtube.com/watch?v=", "http://youtube.com/embed/")
                console.log(url)
                this.videosUrl[i].push(
                  this.sanitizeURL(url)
                )

              }



            }

            console.log(this.videosUrl)

          }else{
            alert("No hay videos de artistas")
          }
        }

      });

  }
}
