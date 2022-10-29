import { Injectable } from '@angular/core';
import { Storage, ref} from '@angular/fire/storage';
import { getDownloadURL, list, uploadBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  url:string ="";

  constructor(private storage:Storage) { }

  public uploadImage($event: any, name:string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/`+ name);
    uploadBytes(imgRef, file)
    .then(response => {this.getImg()})
    .catch(error=>console.log(error));
    
  }
  getImg(){
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response =>{
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es: "+ this.url);
      }
    })
    .catch(error=>console.error(error))
    
  }
}
