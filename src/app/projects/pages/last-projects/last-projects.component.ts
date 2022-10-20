import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.css']
})
export class LastProjectsComponent implements OnInit {

  public projects: Project[] = []


  constructor(
    private project_service: ProjectService
  ) { }

  ngOnInit(): void {


    this.getProjects()

  }


  getProjects(){
    this.project_service.getProjects('yes').subscribe(res => {
      this.projects = res
      
    }, err => {
      console.log(err);
      
    })

  }
}
