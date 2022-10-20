import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styles: [
  ]
})
export class ReadComponent implements OnInit {

  public projects: Project[] = []


  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    
    this.projectService.getProjects().subscribe(res => {
      
      this.projects = res

      console.log(res);
      
      
      
    }, error => {
      console.log(error);
      
    })
  }



 

}
