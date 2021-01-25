import { SecurityContext } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  video = null;
  urlIframe: string | undefined ;
  safeUrl: string | null | undefined;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getVideo(this.route.snapshot.paramMap.get('id'));
  }

  getVideo(id: string | number | null): void {
    this.videoService.getById(id)
      .subscribe(
        video => {
          this.video = video;
          console.log(video);
          this.urlIframe = "https://www.youtube.com/embed/" + video.urlCode;
          this.safeUrl =  this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(this.urlIframe));;
        },
        error => {
          console.log(error);
        });
  }
}
