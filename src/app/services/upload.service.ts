import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



const base_url = environment.url
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }


  async updateImage(file: File, id: string) {


    try {
      const url = `${base_url}project/upload-image/${id}`
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(url, {
        method: 'PUT',
        body: formData
      })


      const data = await response.json()
    

      if (data.ok) {
        return data.image.secure_url
      }
      else {

        return false
      }





    } catch (error) {

      console.log(error);
      
      return false
    }
  }
}
