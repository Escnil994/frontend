import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import {CommentServiceService} from "../../../services/comment-service.service";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent implements OnInit {

  createComment = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    comment: new  FormControl('')
  })

  constructor(
    private _CommentService: CommentServiceService
  ) { }

  ngOnInit(): void {
  }


  create(){
    this._CommentService.createComment(this.createComment.value).subscribe(res =>{

    }, error => {
      console.log(error)
    })

  }



}
