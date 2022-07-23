import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {CreateComponent} from "./pages/create/create.component";
import {UpdateComponent} from "./pages/update/update.component";
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: CreateComponent
      },
      {
        path: 'update', component: UpdateComponent
      },
      {
        path: '**', redirectTo: 'login'
      }
    ]
  }
  ]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class UsersRoutingModule { }
