import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Student } from "../models/student.model";



@Injectable({
    providedIn: 'root'
  })
  
  export class StudentService {
    private _student: Student[] = [
      {
        StuId: 1,
        StuName: 'Jose',
        StuSurname: 'Benítez',
        StuAge: 50,
        StuPicture: '../assets/images/students/Jose.jfif',
      },
      {
        StuId: 2,
        StuName: 'Diego',
        StuSurname: 'Aguilera',
        StuAge: 35,
        StuPicture: '../assets/images/students/Diego.jfif',
      },
      {
        StuId: 3,
        StuName: 'Alejandro',
        StuSurname: 'Gutiérrez',
        StuAge: 18,
        StuPicture: '../assets/images/students/Alejandro.jfif',
      },
    ];
  
    private _studentSubject: BehaviorSubject<Student[]> = new BehaviorSubject(this._student);
    public _student$ = this._studentSubject.asObservable();
  
    id: number = this._student.length + 1;
    constructor() {}
  
    getStudent() {
      return this._student;
    }
  
    getStudentById(id: number) {
      return this._student.find((p) => p.StuId == id);
    }
  
    deleteStudentById(id: number) {
      this._student = this._student.filter((p) => p.StuId != id);
      this._studentSubject.next(this._student);
    }
  
    addStudent(student: Student) {
      student.StuId = this.id++;
      this._student.push(student);
      this._studentSubject.next(this._student);
    }
  
    updateStudent(student:Student) {
      var _student = this._student.find((p) => p.StuId == student.StuId);
      if (_student) {
        _student.StuName = student.StuName;
        _student.StuSurname = student.StuSurname;
        _student.StuAge = student.StuAge;
        _student.StuPicture = student.StuPicture;
      }
      this._studentSubject.next(this._student);
    }
  }
  