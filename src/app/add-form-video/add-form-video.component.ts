import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-add-form-video',
  templateUrl: './add-form-video.component.html',
  styleUrls: ['./add-form-video.component.scss']
})
export class AddFormVideoComponent implements OnInit {

  videoForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private videoService: VideoService,
    private route: ActivatedRoute
  ) {
    this.videoForm = this.formBuilder.group({
      name: [''],
      singer: [''],
      genre: [''],
      imgPath: [''],
      urlCode: [''],
      duration: [0]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.videoService.createVideo(this.videoForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
      }, (err) => {
        console.log(err);
    });
  }

}
