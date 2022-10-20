import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "./main-page/main-page.component";
import {SharedModule} from "../shared/shared.module";
import {ProjectsModule} from "../projects/projects.module";
import {PostsModule} from "../posts/posts.module";
import {CommentsModule} from "../comments/comments.module";
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsModule,
    PostsModule,
    CommentsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
