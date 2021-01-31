import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { AddFormVideoComponent } from './add-form-video/add-form-video.component';
import { EditFormVideoComponent } from './edit-form-video/edit-form-video.component';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';
import { EditPlaylistComponent } from './edit-playlist/edit-playlist.component';
import { ManagePlaylistVideosComponent } from './manage-playlist-videos/manage-playlist-videos.component';

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
    component: AddFormVideoComponent
  },
  {
    path: 'edit-video/:id',
    component: EditFormVideoComponent
  },
  {
    path: 'add-playlist',
    component: AddPlaylistComponent
  },
  {
    path: 'edit-playlist/:id',
    component: EditPlaylistComponent
  },
  {
    path: 'manage-videoPlaylist',
    component: ManagePlaylistVideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
