import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-project',
  templateUrl: './get-project.component.html'
})
export class GetProjectComponent implements OnInit {


  project!: Project

  constructor(
    private projectService: ProjectService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getProjectById()

  }


  getProjectById() {


    this._activatedRoute.url.subscribe(res => {



      this.projectService.getProject(res[1].path).subscribe(({ project }) => {

        this.project = project

        console.log(project);


      }, error => {
        let timerInterval: any
        Swal.fire({
          title: `${error.error.msg}`,
          html: ` ${error.error.msg2} <b></b> `,
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b: any = Swal.getHtmlContainer()?.querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = ''
            }, 500)
          },
          willClose: () => {
            clearInterval(timerInterval)

            this.router.navigate(['/projects/get-projects'])
            
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
          
          }
        })


      })
    })

  }

}
