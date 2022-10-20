import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../../services/project.service";
import { ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';
import { Project } from 'src/app/models/project.model';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-preview-create',
  templateUrl: './preview-create.component.html',
  styles: [
  ]
})
export class PreviewCreateComponent implements OnInit {


  load: boolean = true
  imageToUpload!: File; 

  project?: Project

  constructor(
    private _projectService: ProjectService,
    private _activatedRoute: ActivatedRoute,
    private _fileUpload: UploadService
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


  changeImage(event: any){
    this.imageToUpload = event.files[0]
    
  }

  uploadImage(){

    this.load = false
    this._fileUpload.updateImage(this.imageToUpload, this.project!._id).then(
      img => {
        this.project!.image!.secure_url = img
        this.load = true

      }
    )
  }


  


}
