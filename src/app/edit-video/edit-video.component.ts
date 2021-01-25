import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.scss']
})
export class EditVideoComponent implements OnInit {

  video = 
  {
    id: 0,
    duration: 0,
    genre: "",
    imgPath: "",
    name: "",
    singer: "",
    urlCode: ""
  };
  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute
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
        },
        error => {
          console.log(error);
        });
  }

  updateVideo(): void {
    this.videoService.update(this.video)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
