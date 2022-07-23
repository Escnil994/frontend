import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './pages/delete/delete.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { ReadComponent } from './pages/read/read.component';
import {ProjectsRoutingModule} from "./projects-routing.module";
import { LastProjectsComponent } from './pages/last-projects/last-projects.component';



@NgModule({
  declarations: [
    DeleteComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent,
    LastProjectsComponent
  ],
  exports: [
    LastProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
