import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {
  @Input() playlist: any;
  list:string[] = [];

  constructor(
    private videoService: VideoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  
  }

  deletePlaylist(): void {
    this.videoService.deletePlaylist(this.playlist.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/playlist-list']);
        },
        error => {
          console.log(error);
        });
  }

}
