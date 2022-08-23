import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './pages/delete/delete.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { ReadComponent } from './pages/read/read.component';
import {ProjectsRoutingModule} from "./projects-routing.module";
import { LastProjectsComponent } from './pages/last-projects/last-projects.component';
import { HomeProjectComponent } from './pages/home-project/home-project.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { PreviewCreateComponent } from './pages/preview-create/preview-create.component';



@NgModule({
  declarations: [
    DeleteComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent,
    LastProjectsComponent,
    HomeProjectComponent,
    PreviewCreateComponent
  ],
  exports: [
    LastProjectsComponent
  ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class ProjectsModule { }
