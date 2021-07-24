import { HttpClient } from '@angular/common/http';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/templates/category';
import { ProductsService } from '../products.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


  json_result : any;

  new_image_name:String;

  image_name:String = 'https://myhostingprojects.000webhostapp.com/images/';

  file=new FormControl('');
  
  file_data:any=''

  constructor(private p: ProductsService, private http:HttpClient) {  }

  categories: category;

  ngOnInit(): void {
    this.getCategoryData();
  }

  //upload image
  ip="https://myhostingprojects.000webhostapp.com/";

  fileChange(event :any) {
    
    const fileList: FileList = event.target.files;
    //check whether file is selected or not
    if (fileList.length > 0) {

        const file = fileList[0];
        //get file information such as name, size and type
        console.log('finfo',file.name,file.size,file.type);
        //max file size is 4 mb
        if((file.size/1048576)<=4)
        {
          let formData = new FormData();
          let info={id:2,name:'raja'}
          formData.append('file', file, file.name);
          formData.append('id','2');
          formData.append('tz',new Date().toISOString())
          formData.append('update','2')
          formData.append('info',JSON.stringify(info))
          this.file_data=formData
          
        }else{
          //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
        }
        
    }

    this.http.post(this.ip+'upload-file.php',this.file_data)
    .subscribe(res => {
    //send success response
    console.log(res);
    this.json_result = res;
    this.image_name = this.image_name + this.json_result.image_name;
    console.log(this.image_name);
    }, (err) => {
    //send error response
    console.log(err);
  });


  }

  // uploadFile()
  // {
  //   this.http.post(this.ip+'upload-file.php',this.file_data)
  //   .subscribe(res => {
  //   //send success response
  //   console.log(res);
  //   this.json_result = res;
  //   this.image_name = this.image_name + this.json_result.image_name;
  //   console.log(this.image_name);
  //   }, (err) => {
  //   //send error response
  //   console.log(err);
  // });
  // }

  getCategoryData(){
    this.p.getCategories().subscribe(data=>{
      this.categories = data;
      console.log(this.categories);
    })
  }

  addNewProduct(newProduct){

  //   this.http.post(this.ip+'upload-file.php',this.file_data)
  //   .subscribe(res => {
  //   //send success response
  //   console.log(res);
  //   this.json_result = res;
  //   this.image_name = this.image_name + this.json_result.image_name;
  //   console.log(this.new_image_name);
  //   }, (err) => {
  //   //send error response
  //   console.log(err);
  // });

  
    let productToBeadded  = {
      //didn't put the id field so its autoincremented
      title: newProduct.product_name,
      price: newProduct.product_price,
      description: newProduct.product_description,
      category: newProduct.product_category,
      image: this.image_name
    } 

      // this.productToBeadded.title =  newProduct.product_name;
      // this.productToBeadded.price =  newProduct.product_price;
      // this.productToBeadded.description =  newProduct.product_description;
      // this.productToBeadded.category =  newProduct.product_category;
      // this.productToBeadded.image =   this.json_result.image_name;
      
     
    console.log(productToBeadded)
    this.p.createProduct(productToBeadded).subscribe(data=>{
      console.log("product added")
    })
  }
  

}
