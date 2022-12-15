import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Student } from '../../models';
import { StudentService } from '../../services';


export const STUDENT_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StudentSelectableComponent),
  multi: true
};


@Component({
  selector: 'app-student-selectable',
  templateUrl: './student-selectable.component.html',
  styleUrls: ['./student-selectable.component.scss'],
  providers: 
  [STUDENT_PROFILE_VALUE_ACCESSOR]
})
export class StudentSelectableComponent implements OnInit {

  selectedStudent:Student=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private studentSvc:StudentService
  ) { }


  writeValue(obj: any): void {
    this.selectedStudent = this.studentSvc.getStudentById(obj);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getStudent(){
    return this.studentSvc.getStudent();
  } 

  onStudentClicked(student:Student, accordion:IonAccordionGroup){
    this.selectedStudent = student;
    accordion.value='';
    this.propagateChange(this.selectedStudent.StuId);
  }

}
