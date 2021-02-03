import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-add-form-video',
  templateUrl: './add-form-video.component.html',
  styleUrls: ['./add-form-video.component.scss']
})
export class AddFormVideoComponent implements OnInit {

  videoForm: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private videoService: VideoService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.videoForm = this.formBuilder.group({
      name: ['', Validators.required],
      singer: ['', Validators.required],
      genre: ['', Validators.required],
      imgPath: ['', Validators.required],
      urlCode: ['', Validators.required],
      duration: [0, Validators.required]
    })
   }

  ngOnInit(): void {
  }
// convenience getter for easy access to form fields
get f() { return this.videoForm.controls; }

  onSubmit(): any {
    this.submitted = true;
    this.videoService.createVideo(this.videoForm.value)
    .subscribe(() => {
      this.videoForm.reset()
      this.submitted = false;
        console.log('Data added successfully!')
        this.toastr.success('The video has been added successfully!', 'Success');
      }, (err) => {
        this.toastr.error(err.error, 'There was an error to create the playlist!');
        console.log(err);
    });
  }
}
