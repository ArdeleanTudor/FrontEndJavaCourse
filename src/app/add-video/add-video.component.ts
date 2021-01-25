import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
video = 
  {
    duration: 1,
    genre: "",
    imgPath: "",
    name: "",
    singer: "",
    urlCode: ""
  };
  submitted = false;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
  }

  addVideo(): void {
    const data = {
      duration: this.video.duration,
      genre: this.video.genre,
      imgPath: this.video.imgPath,
      name: this.video.name,
      singer: this.video.singer,
      urlCode: this.video.urlCode
    };

    this.videoService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
}

newVideo(): void {
  this.submitted = false;
  this.video = {
    duration: 0,
    genre: "",
    imgPath: "",
    name: "",
    singer: "",
    urlCode: ""
  };
}

}
