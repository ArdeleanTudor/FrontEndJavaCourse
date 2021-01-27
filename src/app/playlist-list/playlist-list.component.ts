import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  constructor(private videoService: VideoService) { }
  playlists: any[] = [];
  getAllPlaylists()  {
    this.videoService.getPlaylists().subscribe((data: any[]) => {
        this.playlists = data;
        console.log(data);
    });
  }
  ngOnInit(): void {
    this.getAllPlaylists();
  }

}
