import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from "../../environments/environment";

import { RegisterUserInterface } from "../interfaces/register-user.interface";
import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, of } from 'rxjs';



const base_url: string = environment.url


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }


  ValidateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || ''

    return this._http.get(base_url + 'auth/renew', {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token)
      }),
      map(res => true),
      catchError(e => of(false))
    )
  }

  getUser(user: string): Observable<RegisterUserInterface>{
    const token = localStorage.getItem('token') || ''

    return this._http.get<RegisterUserInterface>(base_url + 'auth/get-user/'+ user, { headers: {'x-token': token}} )
  }
  createUser(data: RegisterUserInterface) {
    return this._http.post(base_url + 'auth/new', data)
  }

  loginUSer(formData: LoginForm) {
    return this._http.post(base_url + 'auth/login', formData).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token)
      })
    )
  }



}
