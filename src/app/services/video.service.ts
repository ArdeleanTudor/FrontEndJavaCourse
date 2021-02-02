import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }
  rootURL = 'http://localhost:8080';

  getVideos() : Observable<any> {
    return this.http.get(this.rootURL + '/videos');
  }

  getPlaylists() : Observable<any> {
    return this.http.get(this.rootURL + '/playlists');
  }

  createVideo(data: { duration: number; genre: string; imgPath: string; name: string; singer: string; urlCode: string; }): Observable<any> {
    return this.http.post(this.rootURL + '/videos', data);
  }

  createPlaylist(data: { imgPath: string; name: string; }): Observable<any> {
    return this.http.post(this.rootURL + '/playlists', data);
  }

  getVideoById(id:number | string | null): Observable<any> {
    return this.http.get(`${this.rootURL}/videos/${id}`);
  }

  getPlaylistById(id:number | string | null): Observable<any> {
    return this.http.get(`${this.rootURL}/playlists/${id}`);
  }

  getAllVideosFromPlaylistById(id:number | string | null): Observable<any> {
    return this.http.get(`${this.rootURL}/playlists/${id}/videos`);
  }

  updateVideo(data : { duration: number; genre: string; imgPath: string; name: string; singer: string; urlCode: string; }): Observable<any> {
    return this.http.put(this.rootURL + '/videos', data);
  }

  updatePlaylist(data : { imgPath: string; name: string; }): Observable<any> {
    return this.http.put(this.rootURL + '/playlists', data);
  }

  deleteVideo(id :number): Observable<any> {
    return this.http.delete(`${this.rootURL}/videos/${id}`);
  }

  deletePlaylist(id :number): Observable<any> {
    return this.http.delete(`${this.rootURL}/playlists/${id}`);
  }

  deleteVideoFromPlaylist(videoId :number, playlistId: number): Observable<any> {
    return this.http.delete(`${this.rootURL}/video-playlist?videoId=${videoId}&playlistId=${playlistId}`);
  }

  addVideoToPlaylist(data: { videoId: number; playlistId: number; }): Observable<any> {
    return this.http.post(this.rootURL + '/video-playlist', data);
  }
}
