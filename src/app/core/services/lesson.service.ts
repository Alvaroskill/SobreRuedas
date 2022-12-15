import * as moment from 'moment-timezone' ;

import { Injectable } from '@angular/core';
import { Lesson } from '../models/Lesson.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private _Lesson:Lesson[] = [
    {
      LesId:1,
      ProId:1,
      StuId:1,
      dateTime:moment().toISOString(),
    },
    {
        LesId:2,
        ProId:2,
        StuId:2,
        dateTime:moment().add(1,'days').toISOString(),
      }
  ];

  private _LessonSubject:BehaviorSubject<Lesson[]> = new BehaviorSubject(this._Lesson);
  public Lesson$ = this._LessonSubject.asObservable();

  id:number = this._Lesson.length+1;
  constructor() {

  }

  getLesson(){
    
    return this._Lesson;
  }

  getLessonById(id:number){
    return this._Lesson.find(a=>a.LesId==id);
  }

  getLessonByStudentId(StuId:number):Lesson[]{
    return this._Lesson.filter(a=>a.StuId == StuId);
  }

  getLessonByPersonId(ProId:number):Lesson[]{
    return this._Lesson.filter(a=>a.ProId == ProId);
  }

  deleteLessonById(id:number){
    this._Lesson = this._Lesson.filter(a=>a.LesId != id); 
    this._LessonSubject.next(this._Lesson);
  }

  addLesson(lesson:Lesson){
    lesson.LesId = this.id++;
    this._Lesson.push(lesson);
    this._LessonSubject.next(this._Lesson);
  }

  updateLesson(Lesson:Lesson){
    var _Lesson = this._Lesson.find(a=>a.LesId==Lesson.LesId);
    if(_Lesson){
      _Lesson.StuId = Lesson.StuId;
      _Lesson.ProId = Lesson.ProId;
      _Lesson.dateTime = Lesson.dateTime;
    }
    this._LessonSubject.next(this._Lesson);
    
  }
}
