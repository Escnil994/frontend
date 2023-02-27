import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {CreateComponent} from "./pages/create/create.component";
import {UpdateComponent} from "./pages/update/update.component";
import {DeleteComponent} from "./pages/delete/delete.component";
import {ReadComponent} from "./pages/read/read.component";
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create', component: CreateComponent
      },
      {
        path: 'update', component: UpdateComponent
      },
      {
        path: 'delete', component: DeleteComponent
      },
      {
        path: 'get-comments', component: ReadComponent
      },
      {
        path: 'autorize-comment/:id', component: UpdateComponent, canActivate: [AuthGuard]
      },
      {
        path: '**', redirectTo: 'get-comments'
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
export class CommentsRoutingModule { }
