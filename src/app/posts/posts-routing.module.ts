import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ReadComponent} from "./pages/read/read.component";
import {UpdateComponent} from "./pages/update/update.component";
import {DeleteComponent} from "./pages/delete/delete.component";
import {CreateComponent} from "./pages/create/create.component";
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'get-posts', component: ReadComponent
      },
      {
        path: 'get-post', component: ReadComponent
      },
      {
        path: 'create-post', component: CreateComponent
      },
      {
        path: 'update-post', component: UpdateComponent
      },
      {
        path: 'delete-post', component: DeleteComponent
      },
      {
        path: '**', redirectTo: 'get-posts'
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
export class PostsRoutingModule { }


