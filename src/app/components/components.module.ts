import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalImageComponent } from './modal-image/modal-image.component';



@NgModule({
  declarations: [
    ModalImageComponent
  ],
  exports: [
    ModalImageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
