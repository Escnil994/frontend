import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './pages/delete/delete.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { ReadComponent } from './pages/read/read.component';
import {PostsRoutingModule} from "./posts-routing.module";
import { LastPostsComponent } from './pages/last-posts/last-posts.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DeleteComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent,
    LastPostsComponent,
    HomeComponent
  ],
  exports: [
    LastPostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
