import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';



@NgModule({
  declarations: [
    LoginComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
