import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';

const routes: Routes = [
  {
    path:'',
    component: PageOneComponent
  },
  {
    path: 'two',
    component: PageTwoComponent
  },
  {
    path: 'play-video',
    component: VideoPlayerComponent
  },
  {
    path: 'playlist-list',
    component: PlaylistListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
