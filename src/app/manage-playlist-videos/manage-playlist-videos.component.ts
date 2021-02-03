import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-manage-playlist-videos',
  templateUrl: './manage-playlist-videos.component.html',
  styleUrls: ['./manage-playlist-videos.component.scss']
})
export class ManagePlaylistVideosComponent implements OnInit {

  manageForm: FormGroup;
  videosList : Array<any> = [];
  playlistsList : Array<any> = [];
  submitted = false;


  constructor(
    public formBuilder: FormBuilder,
    private videoService: VideoService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { 
    this.manageForm = this.formBuilder.group({
      videoId:['', Validators.required],
      playlistId:['', Validators.required]
    })
   }
  

  getPlaylistsList()  {
    this.videoService.getPlaylists().subscribe((data: any[]) => {
        this.playlistsList = data;
    });
  }

  getVideosList()  {
    this.videoService.getVideos().subscribe((data: any[]) => {
        this.videosList = data;
    });
  }

  ngOnInit(): void {
    this.getVideosList();
    this.getPlaylistsList();
  }

   // convenience getter for easy access to form fields
   get f() { return this.manageForm.controls; }

  addVideoToPlaylist(): any {
    this.submitted = true;
    console.log("video id", this.manageForm.value.videoId);
    console.log("playlist id", this.manageForm.value.playlistId);
    console.log(this.manageForm.value);
    if(this.manageForm.valid )
    {
      this.videoService.addVideoToPlaylist(this.manageForm.value)
      .subscribe(() => {
        this.manageForm.reset()
        this.submitted = false;
          this.toastr.success('The video has been added successfully to playlist!', 'Success');
        }, (err) => {
          this.toastr.error(err.error, 'There was an error to add the video!');
  
          console.log(err);
      });
    }
 
  }

}
