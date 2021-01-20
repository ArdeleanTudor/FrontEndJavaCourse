import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  name = 'JAVA Class'
  @Output() clickedOnMenu = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  openSidenav(): void{
    this.clickedOnMenu.emit('click');
  }
}
