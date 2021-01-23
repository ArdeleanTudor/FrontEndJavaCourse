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

}
