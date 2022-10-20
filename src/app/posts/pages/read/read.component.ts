import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styles: [
  ]
})
export class ReadComponent implements OnInit {

  public posts: Post[] = []


  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    
    this.postService.getPosts().subscribe(res => {
      
      this.posts = res

      console.log(res);
      
      
      
    }, error => {
      console.log(error);
      
    })
  }



 
}
