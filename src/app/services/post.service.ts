import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostInterface } from '../interfaces/post.interface';
import { Post } from '../models/post.model';



const base_url: string = environment.url


@Injectable({
  providedIn: 'root'
})
export class PostService {

 
  public Post: Post | undefined



  constructor(
    private http: HttpClient
  ) { }

  get token(){
    return localStorage.getItem('token') || ''
  }

  get headers(){
    return {
      headers: { 'x-token': this.token}
    }
  }

  getPost(id: string): Observable<any>{
    const url = `${base_url}posts/get-project/${id}`
    return this.http.get<any>(url).pipe(
      map((res: {ok: boolean, project: Post }) => res)
    )

  }


  createPost(project: PostInterface): Observable<PostInterface> {
    let params = JSON.stringify(project)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post<PostInterface>(base_url + 'project/create-new-project', params, { headers:headers})
  }

  getPosts(limit: String = 'NO'){
    const url = `${base_url}blog/get-posts/${limit}`
    return this.http.get<any>(url).pipe(
      map((res: {ok: boolean, posts: Post[], cant: number}) => {
        return res.posts
        
      })
    )
    
  }


  createProjects(product: {ttitle: string, subtitle: string, content: string, github: string, url: string, video: string, more: string, }){
 
    console.log(this.headers);
    
    const url = base_url + 'project/create-new-project'

    return this.http.post(url, product, this.headers)
  }



}