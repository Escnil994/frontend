import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProjectInterface} from "../interfaces/project.Interface";
import {Observable} from "rxjs";

const base_url: string = environment.url

@Injectable({
  providedIn: 'root'
})
export class ProjectService {



  constructor(
    private _http: HttpClient
  ) { }


  getProject(project: string):Observable<any>{
    return this._http.get<ProjectInterface>(base_url+'project/get-project/'+ project )
  }


  createProject(project: ProjectInterface): Observable<ProjectInterface> {
    let params = JSON.stringify(project)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this._http.post<ProjectInterface>(base_url + 'project/create-new-project', params, { headers})
  }


}
