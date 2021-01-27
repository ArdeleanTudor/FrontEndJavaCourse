import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.scss']
})
export class AddPlaylistComponent implements OnInit {

  playlistForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private videoService: VideoService,
    private route: ActivatedRoute
  ) { 
    
    this.playlistForm = this.formBuilder.group({
      name: [''],
      imgPath: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.videoService.createPlaylist(this.playlistForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
      }, (err) => {
        console.log(err);
    });
  }

}
