import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-last-posts',
  templateUrl: './last-posts.component.html',
  styleUrls: ['./last-posts.component.css']
})
export class LastPostsComponent implements OnInit {

  posts: Post [] = []

  constructor(
    private _post_service: PostService
  ) { }

  ngOnInit(): void {

    this.getLastsPosts()

    
  }


  getLastsPosts(){

    this._post_service.getPosts('yes').subscribe((posts) => {

      this.posts = posts

      console.log(posts);
      
    }, (error) => {
      console.log(error);
      
    })
  }

}
