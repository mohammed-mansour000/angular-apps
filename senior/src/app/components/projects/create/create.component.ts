import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  isLebanonSelected: boolean = false;
  selectedCountry :string = "";

  addProject: FormGroup;

  constructor(private fb: FormBuilder) { }
 

  checkBoxItems = [
    {value: 1, labelName: "test1"},
    {value: 2, labelName: "test1"},
    {value: 3, labelName: "test1"},
    {value: 4, labelName: "test1"},
    {value: 5, labelName: "test1"},
    {value: 6, labelName: "test1"},
  ]


  ngOnInit(): void {
    this.addProject = this.fb.group({
      title: new FormControl(null, [Validators.required]),
      abstract: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      country: new FormControl('', Validators.required),
      province: new FormControl(''),
      checkArray: this.fb.array([], [Validators.required])
    });
    //  new FormGroup({
      
      
    // })
  }

  create(){
    if(this.addProject.get("country").value !== "1"){ //if lebanon is not selected 
      this.addProject.get("province").setValue(""); //set value as null
    }
    console.log(this.addProject.value);
  }

  //for checkboxes
  onCheckboxChange(e) {
    const checkArray: FormArray = this.addProject.get('checkArray') as FormArray;

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


  getFormControl(name) {
    return this.addProject.get(name);
  }

}
