import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../services/project.service";
import {ActivatedRoute} from "@angular/router";
import {ProjectInterface} from "../../../interfaces/project.Interface";
import {Project} from "../../../models/project.model";

@Component({
  selector: 'app-preview-create',
  templateUrl: './preview-create.component.html',
  styles: [
  ]
})
export class PreviewCreateComponent implements OnInit {



  constructor(
    private _projectService: ProjectService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this._activatedRoute.url.subscribe(res => {

      this._projectService.getProject(res[1].path).subscribe(project => {

        project.project
      })
    })
  }



}
