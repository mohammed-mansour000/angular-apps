import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload';

const uploadAPI = 'http://localhost:4000/api/upload'; // better use a service class

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng8fileuploadexample';
  public uploader: FileUploader = new FileUploader({ url: uploadAPI, itemAlias: 'file' });
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded successfully:', item, status, response);
         alert('Your file has been uploaded successfully');
    };
 }
}