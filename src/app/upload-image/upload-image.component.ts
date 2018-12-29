import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import {HttpClient,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor( private api : ApiServiceService ,private http: HttpClient) { }

  ngOnInit() {
  }
 files
  imageSrc: string = '';

  handleInputChange(e) {
   let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    let pattern = /image-*/;
    let reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }

//   imageUrl :string = "https://nebaltbeel.github.io/clothesProject/assets/img/hello.jpg";
// fileToUpload :File = null;
//   handleFileInput(File :FileList){
// this.fileToUpload = File.item(0);
// var reader = new FileReader();
// reader.onload = (event :any) => {

//   this.imageUrl = event.target.result;
// }

// reader.readAsDataURL(this.fileToUpload);
//   }

//   onSubmit(caption,image){

//     this.api.postFile(caption,image);

//   }
ress
selectedFile: File;
onFileChanged(event) {
  const file = event.target.files[0]
}
onUpload() {
  // this.http is the injected HttpClient
  this.http.post('../../clothesProject/assets/img', this.selectedFile)
    .subscribe(res =>this.ress =res);
    console.log(this.ress);
}

}
