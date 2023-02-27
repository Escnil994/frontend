import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private userService: UserService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

      return this.userService.ValidateToken().pipe(
        tap( isAdmin => {
          if(!isAdmin) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You are not autorize to do this, Please Login as ADMIN to continue',
            })
            this.router.navigateByUrl('/home')
          }
        })
      )
  }
  
}
