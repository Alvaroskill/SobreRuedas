import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lesson } from 'src/app/core/models/lesson.model';
import { Professor, Student } from '../../models';

import { ProfessorService } from '../../services';
import { StudentService } from '../../services';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() lesson :Lesson;

  constructor(
    private professorSvc:ProfessorService,
    private studentSvc:StudentService,
    public locale:LocaleService
  ){
  }

  ngOnInit(
  ) {

  }

  getProfessor():Professor{
    var ProId = this.lesson.ProId;
    if(ProId)
      return this.professorSvc.getProfessorById(ProId);
    return undefined;
  }

  getStudent():Student{
    var StuId = this.lesson.StuId;
    if(StuId)
      return this.studentSvc.getStudentById(StuId);
    return undefined;
  }

  onEditClick(){
    this.onEdit.emit(this.lesson);
  }

  onDeleteClick(
    
  ){
    this.onDelete.emit(this.lesson);
  }

  

}
