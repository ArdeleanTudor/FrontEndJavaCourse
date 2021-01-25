import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';

const routes: Routes = [
  {
    path:'',
    component: PageOneComponent
  },
  {
    path: 'play-video/:id',
    component: VideoPlayerComponent
  },
  {
    path: 'playlist-list',
    component: PlaylistListComponent
  },
  {
    path: 'add-video',
    component: AddVideoComponent
  },
  {
    path: 'edit-video/:id',
    component: EditVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
