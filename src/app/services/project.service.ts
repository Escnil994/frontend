import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProjectInterface} from "../interfaces/project.Interface";

import {map, retry} from "rxjs/operators";
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';

const base_url: string = environment.url

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public project: Project | undefined



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

  getProject(id: string): Observable<any>{
    const url = `${base_url}project/get-project/${id}`
    return this.http.get<any>(url).pipe(
      map((res: {ok: boolean, project: Project }) => res)
    )

  }


  createProject(project: ProjectInterface): Observable<ProjectInterface> {
    let params = JSON.stringify(project)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post<ProjectInterface>(base_url + 'project/create-new-project', params, { headers:headers})
  }

  getProjects(limit: String = 'NO'){
    const url = `${base_url}project/get-projects/${limit}`
    return this.http.get<any>(url).pipe(
      map((res: {ok: boolean, projects: Project[], cant: number}) => {
        return res.projects
        
      })
    )
    
  }


  createProjects(product: {ttitle: string, subtitle: string, content: string, github: string, url: string, video: string, more: string, }){
 
    console.log(this.headers);
    
    const url = base_url + 'project/create-new-project'

    return this.http.post(url, product, this.headers)
  }


}
