import { Component, OnInit } from '@angular/core';
import { async } from '@rxweb/reactive-form-validators';
import { Comment } from 'src/app/models/comment.model';
import { CommentServiceService } from 'src/app/services/comment-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styles: [
  ]
})
export class ReadComponent implements OnInit {

  comments: Comment[] = []

  constructor(
    private commentsService: CommentServiceService
  ) { }

  ngOnInit(): void {


    this.commentsService.getComments('').subscribe((res) => {

      if (res) {
        for (var comment of res) {
          if (comment.allowed) {
            this.comments.push(comment).toPrecision(2)

          }

        }
      }

      console.log(this.comments[0]);


    }, err => {
      console.log(err);

    })
  }

}
