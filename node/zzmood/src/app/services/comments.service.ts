import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentsService {

  constructor(private http: Http) {
  }

  addComment(newComment) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/comment', JSON.stringify(newComment), { headers: headers }).map(res => res.json());
  }
  
  getComments(channelId) {
    return this.http.get('api/comment/' + channelId).map(res => res.json());
  }
}
