import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { Lesson } from '../../models';
import { LessonService, ProfessorService, StudentService } from '../../services';

@Component({
  selector: 'app-lessons-details',
  templateUrl: './lessons-details.component.html',
  styleUrls: ['./lessons-details.component.scss'],
})
export class LessonsDetailsComponent implements OnInit {
  form:FormGroup;
  mode:"New" | "Edit" = "New";
  button_text = "";

  @Input('lesson') set lesson(lesson:Lesson){
    
    if(lesson){
      this.form.controls.LesId.setValue(lesson.LesId);
      this.form.controls.ProId.setValue(lesson.ProId);
      this.form.controls.StuId.setValue(lesson.StuId);
      this.form.controls.dateTime.setValue(lesson.dateTime);
      this.mode = "Edit";
    }
  }
  

  
  constructor(
    private professorSvc:ProfessorService,
    private studentSvc:StudentService,
    private lessonsSvc:LessonService,
    private fb:FormBuilder,
    private modal:ModalController,
    private translate:TranslateService
  ) { 
    this.form = this.fb.group({
      LesId:[null],
      ProId:[-1, [Validators.min(1)]],
      StuId:[-1, [Validators.min(1)]],
      dateTime:[null, []],
    });
  }

  async ngOnInit() {
    if(this.mode == "Edit")
      this.button_text = await lastValueFrom(this.translate.get('Edit'));  
    else
      this.button_text = await this.translate.get('New').toPromise();

  }

  onSubmit(){
    
    this.modal.dismiss({lesson: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  onChangeDateTime(dateTime){
    this.form.controls.dateTime.setValue(dateTime);
  }

  onDateTime(){
    
  }


}
