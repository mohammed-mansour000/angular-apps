import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

 
  isLebanonSelected: boolean = false;
  selectedCountry :string = "";

  editProject: FormGroup;

  projectValues = {
    title: "title",
    abstract: "abstract",
    description: "desc",
    country: "1",
    province: "1",
    checkArray: ["1","2","3","4"]

  } 
  
  constructor(private fb: FormBuilder) { }
 

  checkBoxItems = [
    {value: 1, labelName: "test1"},
    {value: 2, labelName: "test2"},
    {value: 3, labelName: "test3"},
    {value: 4, labelName: "test4"},
    {value: 5, labelName: "test5"},
    {value: 6, labelName: "test6"},
  ]


  ngOnInit(): void {
    this.editProject = this.fb.group({
      title: new FormControl(this.projectValues.title, Validators.required),
      abstract: new FormControl(this.projectValues.abstract, Validators.required),
      description: new FormControl(this.projectValues.description, Validators.required),
      country: new FormControl(this.projectValues.country, Validators.required),
      province: new FormControl(this.projectValues.province),
      checkArray: this.fb.array(this.projectValues.checkArray, [Validators.required])
    });
    //console.log(this.projectValues.checkArray[1])
  
  }

  edit(){
    if(this.editProject.get("country").value !== "1"){ //if lebanon is not selected 
      this.editProject.get("province").setValue(""); //set value as null
    }
    console.log(this.editProject.value);
  }

  //for checkboxes
  onCheckboxChange(e) {
    const checkArray: FormArray = this.editProject.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  inputChecked(data){
    let checked = false;

    for (let l = 0; l < this.projectValues.checkArray.length; l++){
      let temp = this.projectValues.checkArray[l];
     if (temp == data){
       checked = true;   
       } 
    }
    return checked;
  }

}
