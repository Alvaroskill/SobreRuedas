import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Student } from "../models/student.model";



@Injectable({
    providedIn: 'root'
  })
  
  export class studentService {
    private _student: Student[] = [
      {
        id: 1,
        StuName: 'Jose',
        StuSurname: 'Benítez',
        StuAge: 50,
        StuPicture: 'assets/images/students/Jorge.jfif',
      },
      {
        id: 2,
        StuName: 'Diego',
        StuSurname: 'Aguilera',
        StuAge: 35,
        StuPicture: '../assets/images/students/Lucia.jfif',
      },
      {
        id: 3,
        StuName: 'Alejandro',
        StuSurname: 'Gutiérrez',
        StuAge: 18,
        StuPicture: '../assets/images/students/Paco.jfif',
      },
    ];
  
    private _studentSubject: BehaviorSubject<Student[]> = new BehaviorSubject(this._student);
    public _student$ = this._studentSubject.asObservable();
  
    id: number = this._student.length + 1;
    constructor() {}
  
    getstudent() {
      return this._student;
    }
  
    getstudentById(id: number) {
      return this._student.find((p) => p.id == id);
    }
  
    deletestudentById(id: number) {
      this._student = this._student.filter((p) => p.id != id);
      this._studentSubject.next(this._student);
    }
  
    addstudent(student: Student) {
      student.id = this.id++;
      this._student.push(student);
      this._studentSubject.next(this._student);
    }
  
    updatestudent(student:Student) {
      var _student = this._student.find((p) => p.id == student.id);
      if (_student) {
        _student.StuName = student.StuName;
        _student.StuSurname = student.StuSurname;
        _student.StuAge = student.StuAge;
        _student.StuPicture = student.StuPicture;
      }
      this._studentSubject.next(this._student);
    }
  }
  