import { Product } from './../product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/templates/category';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  
  constructor(private p: ProductsService, 
              private route:ActivatedRoute, 
              private http:HttpClient
              ) {  }

  categories: category;

  product: Product;

  json_result : any;
 
  file=new FormControl('');
  
  file_data:any=''

  image_name:String = 'https://myhostingprojects.000webhostapp.com/images/';

  id=0;

  ngOnInit(): void {

    //get the id from above url
    this.id = this.route.snapshot.params.id;
    console.log(this.id)

    //get the categories
    this.getCategoryData();

    //get the product of this.id
    this.getProductOfCertainId(this.id);
  }

  getCategoryData(){
    this.p.getCategories().subscribe(data=>{
      this.categories = data;
      console.log(this.categories);
    })
  }

  getProductOfCertainId(id:number){
    this.p.viewProduct(id).subscribe(data=>{
      this.product = data;
      console.log(this.product)
    })
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
  }, (err) => {
  //send error response
  console.log(err);
});


}


  updateProduct(newProduct){
   
    let productToBeUpdated  = {
      //didn't put the id field so its autoincremented
      title: newProduct.product_name,
      price: newProduct.product_price,
      description: newProduct.product_description,
      category: newProduct.product_category,
      image: this.image_name
    } 
    //console.log(productToBeUpdated)
    this.p.updateProduct(this.id, productToBeUpdated).subscribe(data=>{
      console.log("product updated")
    })
  }

}
