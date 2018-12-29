import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { Router } from '@angular/router';
import {Iproduct} from '../models/product'
import { getLocaleDateTimeFormat, formatDate } from '@angular/common';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {

  constructor(private api: ApiServiceService, private router:Router, private http:HttpClient) { 

    
  }
  islogin;
product = [];
show = false;
base64Data
converted_image
  ngOnInit() {
    this.api.getLogin().subscribe(response => this.islogin = response)
   // console.log(this.islogin);
    this.api.getProduct().subscribe(products =>this.product =products )

 
  }
  /********************************************** */
  selectedObj =[]


  id=this.id;
  name = this.name
  size = this.size
  color = this.color
  prand = this.prand
  category = this.category
  image = this.image
   
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
    // console.log(this.imageSrc)
   }

   
  addProduct(form){


   let las_obj = this.product[this.product.length-1];
   let last_id=this.product[this.product.length-1].id;
    last_id++;
   // let image = this.imageSrc

form.controls.id.value =  last_id;
form.controls.image.value = this.imageSrc;

console.log(form);
let obj ={
  "id": last_id,
  "name": form.controls.name.value,
  "size": form.controls.size.value,
  "color": form.controls.color.value,
  "prand": form.controls.prand.value,
  "category": form.controls.category.value,
  "image": this.imageSrc,
  "price": form.controls.price.value,
  "people": form.controls.people.value

}
console.log(obj);

if(form.valid == true){



 this.api.addProduct(obj).subscribe(res =>this.product.push(res))
  }   
  }
  /************************************ */
  del
  delete(id){
    this.api.delete(id).subscribe(products =>this.del =products )
console.log(this.del);
  }
  /************************************* */
  onSelect(api){

    this.router.navigate(['/apiDetails',api.id]);
  }
/************************************ */
prom = {}
edit(id){
this.show = true;
this.api.getProductById(id).subscribe(products =>this.prom =products )

}

updateProduct(){

  console.log(this.prom);
  //let id = this.prom;
  this.prom.image = this.imageSrc;
  this.api.updateProduct(this.prom).subscribe(res =>this.product.push(res))





}



}
