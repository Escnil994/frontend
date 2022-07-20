import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


import {NotFoundComponent} from "./shared/not-found/not-found.component";


const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'comments',
    loadChildren: () =>  import('./comments/comments.module').then(m => m.CommentsModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(p => p.ProjectsModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(p => p.PostsModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
