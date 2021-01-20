import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  list:string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.list.push('ana');
    this.list.push('ana');
    this.list.push('ana');
    this.list.push('ana');
    this.list.push('ana');
  }

}
