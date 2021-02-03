import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-add-playlist',
  templateUrl: './add-playlist.component.html',
  styleUrls: ['./add-playlist.component.scss']
})
export class AddPlaylistComponent implements OnInit {

  playlistForm: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private videoService: VideoService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { 
    
    this.playlistForm = this.formBuilder.group({
      name: ['', Validators.required],
      imgPath: ['']
    })
  }

  ngOnInit(): void {
  }

   // convenience getter for easy access to form fields
   get f() { return this.playlistForm.controls; }

  onSubmit(): any {
    this.submitted = true;
    this.videoService.createPlaylist(this.playlistForm.value)
    .subscribe(() => {
      this.playlistForm.reset()
      this.submitted = false;
        console.log('Data added successfully!')
        this.toastr.success('The playlist has been added successfully!', 'Success');
      }, (err) => {
        this.toastr.error(err.error, 'There was an error to create the playlist!');

        console.log(err);
    });
  }

}
