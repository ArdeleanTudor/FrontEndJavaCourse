import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.scss']
})
export class EditPlaylistComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private videoService: VideoService,
    private route: ActivatedRoute
  ) {
    this.getId = this.route.snapshot.paramMap.get('id');

    this.videoService.getPlaylistById(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        imgPath: res['imgPath'],
        id: res['id']
      });
    });

    this.updateForm = this.formBuilder.group({
      name: [''],
      imgPath: [''],
      id:[0]
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.videoService.updatePlaylist(this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
      }, (err) => {
        console.log(err);
    });
  }
  
}
