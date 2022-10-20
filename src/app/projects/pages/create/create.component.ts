import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../../services/project.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']

})
export class CreateComponent implements OnInit {

  public submittedForm: boolean = false


  public projectForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    subtitle: new FormControl('', [Validators.required, Validators.minLength(12)]),
    content: new FormControl('', [Validators.required, Validators.minLength(30)]),
    github: new FormControl(''),
    url: new FormControl(''),
    video: new FormControl(''),
    more: new FormControl('')
  })

  constructor(
    private _formBuilders: FormBuilder,
    private _projectService: ProjectService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {


  }

  validateField(field: string): boolean {
    if (this.projectForm.get(field)?.invalid && this.submittedForm) {
      return true
    } else {
      return false
    }
  }

  getImage(event: any) {
    console.log(event.target.files)
  }

  createNewProject() {

    this.submittedForm = true


    if (this.projectForm.valid) {
      this._projectService.createProjects(this.projectForm.value).subscribe((res: any) => {
        console.log(res);
        
        if (res){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Project has been saved!',
            showConfirmButton: false,
            timer: 2000
          })
          this._router.navigate(['/projects/project-preview/', res.project._id])

        }

      } , error => {
        let timerInterval!: any 
        Swal.fire({
          title: 'Error, Session no valid!',
          html: "You're being redirected to home",
          text: 'Loggin and try againg',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer()!.querySelector('b')
            timerInterval = setInterval(() => {
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        })

      })
    }

  }


}
