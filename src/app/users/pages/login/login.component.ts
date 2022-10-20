import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { email, password } from '@rxweb/reactive-form-validators';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  public formSubmitted = false


  public loginForm = this.fb.group({
    email: [`${localStorage.getItem('email') || ''}`, [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false]
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }


  login(){

    
    this.userService.loginUSer(this.loginForm.value).subscribe( (res:any) => {

      if (this.loginForm.value.remember) {
        localStorage.setItem('email', this.loginForm.value.email)


      }


      let timerInterval!: any 
        Swal.fire({
          title: `Welcome ${res.name}`,
          html: `you're being Logged in successfully!!!`,
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer()!.querySelector('b')
            timerInterval = setInterval(() => {
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        })






      this.router.navigateByUrl('/home')
      
      
    }, (error) => {

      this.loginForm.value.password = ''
      
      Swal.fire('Error', error.error.msg, 'error')
    })
  }


    
  
}
