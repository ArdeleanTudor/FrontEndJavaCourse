import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from '../services/video.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() video: any;
  list:string[] = [];

  constructor(
    private videoService: VideoService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  deleteVideo(): void {
    this.videoService.deleteVideo(this.video.id)
      .subscribe(
        response => {
          console.log(response);
          this.toastr.success('The video has been deleted successfully!', 'Success');
        },
        error => {
          console.log(error);
          this.toastr.error(error.error, 'There was an error to delete the video!');
        });
  }
}
