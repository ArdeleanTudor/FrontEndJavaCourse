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

  create(data: { duration: number; genre: string; imgPath: string; name: string; singer: string; urlCode: string; }): Observable<any> {
    return this.http.post(this.rootURL + '/videos', data);
  }

  getById(id:number | string | null): Observable<any> {
    return this.http.get(`${this.rootURL}/videos/${id}`);
  }

  update(data : { duration: number; genre: string; imgPath: string; name: string; singer: string; urlCode: string; }): Observable<any> {
    return this.http.put(this.rootURL + '/videos', data);
  }

  delete(id :number): Observable<any> {
    return this.http.delete(`${this.rootURL}/videos/${id}`);
  }

}
