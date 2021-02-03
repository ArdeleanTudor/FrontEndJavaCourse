import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-edit-form-video',
  templateUrl: './edit-form-video.component.html',
  styleUrls: ['./edit-form-video.component.scss']
})
export class EditFormVideoComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
  submitted = false;
  
  constructor(
    public formBuilder: FormBuilder,
    private videoService: VideoService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {

    this.getId = this.route.snapshot.paramMap.get('id');

    this.videoService.getVideoById(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        singer: res['singer'],
        genre: res['genre'],
        imgPath: res['imgPath'],
        urlCode: res['urlCode'],
        duration: res['duration'],
        id: res['id']
      });
    });

    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      singer: ['', Validators.required],
      genre: ['', Validators.required],
      imgPath: ['', Validators.required],
      urlCode: ['', Validators.required],
      duration: [0, Validators.required],
      id:[0]
    })
   }

   // convenience getter for easy access to form fields
    get f() { return this.updateForm.controls; }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.submitted = true;
    this.videoService.updateVideo(this.updateForm.value)
    .subscribe(() => {
      this.submitted = false;
        console.log('Data updated successfully!')
        this.toastr.success('The video has been updated successfully!', 'Success');
      }, (err) => {
        console.log(err);
        this.toastr.error(err.error, 'There was an error to update the video!');
    });
  }

}
