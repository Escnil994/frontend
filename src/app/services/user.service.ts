import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {RegisterUserInterface} from "../interfaces/register-user.interface";
import {HttpClient} from "@angular/common/http";



const base_url: string = environment.url


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }


  createUser(data: RegisterUserInterface){
    return this._http.post(base_url+'auth/new', data)
  }



}
