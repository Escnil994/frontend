import { Component, OnInit } from '@angular/core';

import jwt_decode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token: string = localStorage.getItem('token') || ''
  name: string = ''

  alerta = true

  constructor(
    private _userService: UserService
  ) {
  }

  ngOnInit(): void {


    if(this.token == ''){

      this.token = 'empty'

      
    }else{
    
    const token = this.getDecodedAccessToken(this.token)
    
    
    if (token) {
      this._userService.getUser(token.id).subscribe((res) => {
        

        if(res.name){
          this.name = res.name
        }else{
          this.name = ''
        }
        
    

      }, err => {
        this.name=''
        localStorage.removeItem('token')
        this.token = ''
        
      })

    }
    }

    

  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }


  logout() {


    Swal.fire({
      title: 'Do you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token')
        this.token = ''
        this.name = ''

        Swal.fire(
          'Good Bye!',
          'Come back soon!',
          'success'
        )
      }
    })

  }

}
