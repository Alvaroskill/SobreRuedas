import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss'],
})
export class StudentsDetailsComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('student') set student(student:Student){
    if(student){
      this.form.controls.StuId.setValue(student.StuId);
      this.form.controls.StuName.setValue(student.StuName);
      this.form.controls.StuSurname.setValue(student.StuSurname);
      this.form.controls.StuAge.setValue(student.StuAge);
      this.form.controls.StuPicture.setValue(student.StuPicture);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      StuId:[null],
      StuName:['', [Validators.required]],
      StuSurname:['', [Validators.required]],
      StuAge:['', [Validators.required]],
      StuPicture:['']
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    
    this.modal.dismiss({student: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

}

