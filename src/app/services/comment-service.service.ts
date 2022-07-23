import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Comment} from "../models/comment.model";
import {HttpClient} from "@angular/common/http";



const base_url: String = environment.url

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  public comment: Comment | undefined;

  constructor(
    private _http: HttpClient
  ) { }

  createComment(comment: { name: string, email: string, comment: string}){
    const url: string = base_url+'comment/create-new-comment';
    return this._http.post(url, comment);
  }
}
