import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './pages/login/login.component';
import {CreateComponent} from './pages/create/create.component';
import {ReadComponent} from './pages/read/read.component';
import {UpdateComponent} from './pages/update/update.component';
import {UsersRoutingModule} from "./users-routing.module";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule {
}
