import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-playlist-player',
  templateUrl: './playlist-player.component.html',
  styleUrls: ['./playlist-player.component.scss']
})
export class PlaylistPlayerComponent implements OnInit {

  playlistVideos: any[] = [];
  playlistId! : number;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute
  ) { }

  getAllPlaylistVideos(id: string | number | null ) {
    this.videoService.getAllVideosFromPlaylistById(id).subscribe((data: any[]) => {
        this.playlistVideos = data;
        console.log(data);
    });
  }

  ngOnInit(): void {
    this.getAllPlaylistVideos(this.route.snapshot.paramMap.get('id'));
    this.playlistId = Number(this.route.snapshot.paramMap.get('id'));
  }

  deleteVideoFromPlaylist(videoId: number) : void {
    this.videoService.deleteVideoFromPlaylist(videoId, this.playlistId )
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
