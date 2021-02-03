import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-playlist-player',
  templateUrl: './playlist-player.component.html',
  styleUrls: ['./playlist-player.component.scss']
})
export class PlaylistPlayerComponent implements OnInit {

  playlistVideos: any[] = [];
  playlistId! : number;
  currentPlaylist: any;
  currentVideoUrl: any;
  playlistName: string | undefined;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer
  ) { }

  getAllPlaylistVideos(id: string | number | null ) {
    this.videoService.getAllVideosFromPlaylistById(id).subscribe((data: any[]) => {
        this.playlistVideos = data;
    this.currentVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.playlistVideos.videos[1].urlCode);

        console.log(data);
    });
  }

  ngOnInit(): void {
    this.getAllPlaylistVideos(this.route.snapshot.paramMap.get('id'));
    this.playlistId = Number(this.route.snapshot.paramMap.get('id'));
    this.getPlaylist(this.route.snapshot.paramMap.get('id'));
  }
  getPlaylist(id: string | number | null): void {
    this.videoService.getPlaylistById(id)
      .subscribe(
        playlist => {
          this.playlistName = playlist.name;
        },
        error => {
          console.log(error);
        });
  }
  switchVideo(id: any)
  {
    this.currentVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.playlistVideos.videos.find((x: { id: number; }) => x.id == id).urlCode);
  }

  deleteVideoFromPlaylist(videoId: number) : void {
    this.videoService.deleteVideoFromPlaylist(videoId, this.playlistId )
      .subscribe(
        response => {
          console.log(response);
          this.toastr.success('The video has been deleted successfully from the playlist!', 'Success');
        },
        error => {
          console.log(error);
          this.toastr.error(error.error, 'There was an error to delete the video from the playlist!');
        });
  }
}
