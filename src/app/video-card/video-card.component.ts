import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from '../services/video.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() video: any;
  list:string[] = [];

  constructor(private videoService: VideoService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  deleteVideo(): void {
    this.videoService.delete(this.video.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/video-list']);
        },
        error => {
          console.log(error);
        });
  }
}
