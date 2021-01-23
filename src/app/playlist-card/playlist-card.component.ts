import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {

  list:string[] = [];

  constructor() { }

  ngOnInit(): void {
  
  }

}
