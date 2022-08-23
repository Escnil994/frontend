import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateComponent} from "./pages/create/create.component";
import {UpdateComponent} from "./pages/update/update.component";
import {DeleteComponent} from "./pages/delete/delete.component";
import {ReadComponent} from "./pages/read/read.component";
import {HomeProjectComponent} from "./pages/home-project/home-project.component";
import {PreviewCreateComponent} from "./pages/preview-create/preview-create.component";


const routes: Routes = [
  {
    path: '',
    component: HomeProjectComponent,
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'delete', component: DeleteComponent },
      { path: 'get-projects', component: ReadComponent },
      { path: 'get-project', component: ReadComponent },
      { path: 'project-preview/:project', component: PreviewCreateComponent },
      { path: '**', redirectTo: 'get-projects'}
    ]
  }

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule { }
