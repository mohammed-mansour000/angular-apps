import { JsonResult } from './json-result';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'any-name4';

  json_result : any;
loading:boolean = false;
  image_name:String = '';

  file=new FormControl('');
  file_data:any=''
   constructor(public http: HttpClient){  }
   
   
  ngOnInit(): void {
    console.log(`the image name is ${ this.image_name }`);
  }


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

  }

  uploadFile()
    {
      this.http.post(this.ip+'upload-file.php',this.file_data)
      .subscribe(res => {
      //send success response
      console.log(res);
this.loading = true;
      this.json_result = res;
      this.image_name = this.json_result.image_name;
      console.log(this.image_name);
      }, (err) => {
      //send error response
      console.log(err);
    },
	() => this.loading = false	
);

    }

}
