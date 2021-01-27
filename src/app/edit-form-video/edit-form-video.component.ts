import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-edit-form-video',
  templateUrl: './edit-form-video.component.html',
  styleUrls: ['./edit-form-video.component.scss']
})
export class EditFormVideoComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private videoService: VideoService,
    private route: ActivatedRoute
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
      name: [''],
      singer: [''],
      genre: [''],
      imgPath: [''],
      urlCode: [''],
      duration: [0],
      id:[0]
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.videoService.updateVideo(this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
      }, (err) => {
        console.log(err);
    });
  }

}
