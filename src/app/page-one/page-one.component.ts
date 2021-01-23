import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(private videoService: VideoService) { }
  videos: any[] = [];
  getAllVideos()  {
    this.videoService.getVideos().subscribe((data: any[]) => {
        this.videos = data;
        console.log(data);
    });
  }

  ngOnInit(): void {
    this.getAllVideos();
  }

}
