import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  
@Output() onEdit = new EventEmitter;
@Output() onDelete = new EventEmitter;

@Input() student : Student;

  

  constructor() { }

  ngOnInit() {}



    onEditClick(){
      this.onEdit.emit(this.student);
    }
  
    onDeleteClick(){
      this.onDelete.emit(this.student);
    }


  }