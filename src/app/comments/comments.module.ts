import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';
import {CommentsRoutingModule} from "./comments-routing.module";
import { LastCommentsComponent } from './pages/last-comments/last-comments.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    LastCommentsComponent
  ],
  exports: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CommentsModule { }
