import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../../services/project.service";
import { ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-preview-create',
  templateUrl: './preview-create.component.html',
  styles: [
  ]
})
export class PreviewCreateComponent implements OnInit {

  project?: Project

  constructor(
    private _projectService: ProjectService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this._activatedRoute.url.subscribe(res => {

      this._projectService.getProject(res[1].path).subscribe(({project }) => {

        this.project = project
        
        console.log(project);
        

      }, error => {
        Swal.fire({
          title: 'Error',
          text: `${error.error.msg}`,
          icon: 'warning',
          imageAlt: 'Custom image',
        })
        
      })
    })

   
    
  }


  


}
