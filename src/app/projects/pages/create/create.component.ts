import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../../services/project.service";
import {Router} from "@angular/router";

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
      this._projectService.createProject(this.projectForm.value).subscribe(({project}) => {
        if (project){
          this._router.navigate(['/projects/project-preview/', project._id])

        }

      } , error => {

      })
    }

  }


}
