import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {catchError} from "rxjs";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent {

  public submittedForm: boolean = false


  // @ts-ignore
  public registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
  })


  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService
  ) { }



  createNewUser(){
    this.submittedForm = true

    this._userService.createUser(this.registerForm.value).subscribe(res =>{
      console.log(res)
    })


  }




  validateField(field: string): boolean{
    if (this.registerForm.get(field)?.invalid && this.submittedForm){
      return true
    }else {
      return false
    }
  }



  passwordMatch(){
    if (this.registerForm.get('password')?.value ==! this.registerForm.get('passwordConfirm')?.value){
      return true
    } else{
      return false
    }
  }

  confirmPassword(pass: string, pass2: string){
    return (FormGroup: FormGroup) => {
      if (FormGroup.get(pass) === FormGroup.get(pass2)){
        FormGroup.get(pass2)?.setErrors(null)
      }else {
        FormGroup.get(pass2)?.setErrors({doesNotMatch: true})
      }
    }
  }
}
