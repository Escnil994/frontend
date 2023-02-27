import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentServiceService } from 'src/app/services/comment-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: [
  ]
})
export class UpdateComponent implements OnInit {

  constructor(
    private commentService: CommentServiceService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this._activatedRoute.url.subscribe(res => {
      const comment = res[1].path;

      this.autorizeComment(comment)


    }, error => {

    })


  }



  autorizeComment(comment: string) {


    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You will approve this comment, and you wont be able to change it!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Approve It!',
      cancelButtonText: 'No, Do not Approve!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {


        this.commentService.autorizeComment(comment).subscribe((res:any) => {
          
          swalWithBootstrapButtons.fire(
            'Success!',
            `${res.msg}`,
            'success'
          )


        }, error => {
          swalWithBootstrapButtons.fire(
            'Error Approving',
            `${error.error.msg}`,
            'error'
          )

        })
       
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Comment has not beeen approved',
          'error'
        )
      }
    })








  }
}


