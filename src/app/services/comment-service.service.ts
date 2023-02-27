import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Comment } from "../models/comment.model";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';



const base_url: String = environment.url

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {


  constructor(
    private _http: HttpClient
  ) { }


  get token() {
    return localStorage.getItem('token') || ''
  }

  get headers() {
    return {
      headers: { 'x-token': this.token }
    }
  }

  createComment(comment: { name: string, email: string, comment: string }) {
    const url: string = base_url + 'comment/create-new-comment';
    return this._http.post(url, comment);
  }


  getComments(limit: String) {


    const url: string = base_url + 'comment/get-comments/' + limit
    return this._http.get<any>(url).pipe(
      map((res: { ok: boolean, comments: Comment[], cant: number }) => {
        return res.comments

      }))
  }



  autorizeComment(comment: String) {

    const url: string = base_url + 'comment/autorize-comment/' + comment

    return this._http.put(url, this.headers)


  }
}







