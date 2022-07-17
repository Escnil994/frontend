import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';



@NgModule({
  declarations: [
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentsModule { }
