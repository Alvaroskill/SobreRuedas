import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Professor } from '../models/professor.model';


@Injectable({
  providedIn: 'root'
})

export class ProfessorService {
  private _professor: Professor[] = [
    {
      id: 1,
      ProName: 'Jorge',
      ProSurname: 'García',
      ProAge: 23,
      ProPicture: 'assets/images/professors/Jorge.jfif',
    },
    {
      id: 2,
      ProName: 'Lucía',
      ProSurname: 'Cueto',
      ProAge: 30,
      ProPicture: '../assets/images/professors/Lucia.jfif',
    },
    {
      id: 3,
      ProName: 'Paco',
      ProSurname: 'Gutiérrez',
      ProAge: 40,
      ProPicture: '../assets/images/professors/Paco.jfif',
    },
  ];

  private _professorSubject: BehaviorSubject<Professor[]> = new BehaviorSubject(this._professor);
  public _professor$ = this._professorSubject.asObservable();

  id: number = this._professor.length + 1;
  constructor() {}

  getProfessor() {
    return this._professor;
  }

  getProfessorById(id: number) {
    return this._professor.find((p) => p.id == id);
  }

  deleteProfessorById(id: number) {
    this._professor = this._professor.filter((p) => p.id != id);
    this._professorSubject.next(this._professor);
  }

  addProfessor(professor: Professor) {
    professor.id = this.id++;
    this._professor.push(professor);
    this._professorSubject.next(this._professor);
  }

  updateProfessor(professor:Professor) {
    var _professor = this._professor.find((p) => p.id == professor.id);
    if (_professor) {
      _professor.ProName = professor.ProName;
      _professor.ProSurname = professor.ProSurname;
      _professor.ProAge = professor.ProAge;
      _professor.ProPicture = professor.ProPicture;
    }
    this._professorSubject.next(this._professor);
  }
}
