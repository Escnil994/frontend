import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './pages/delete/delete.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { ReadComponent } from './pages/read/read.component';
import {PostsRoutingModule} from "./posts-routing.module";
import { LastPostsComponent } from './pages/last-posts/last-posts.component';



@NgModule({
  declarations: [
    DeleteComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent,
    LastPostsComponent
  ],
  exports: [
    LastPostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
