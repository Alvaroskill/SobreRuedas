import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Professor } from '../../models';
import { ProfessorService } from '../../services';



export const PROFESSOR_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ProfessorSelectableComponent),
  multi: true
};


@Component({
  selector: 'app-professor-selectable',
  templateUrl: './professor-selectable.component.html',
  styleUrls: ['./professor-selectable.component.scss'],
  providers:[PROFESSOR_PROFILE_VALUE_ACCESSOR]
})
export class ProfessorSelectableComponent implements OnInit {


  selectedProfessor:Professor=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private professorSvc:ProfessorService
  ) { }


  writeValue(obj: any): void {
    this.selectedProfessor = this.professorSvc.getProfessorById(obj);
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

  getProfessor(){
    return this.professorSvc.getProfessor();
  } 

  onProfessorClicked(professor:Professor, accordion:IonAccordionGroup){
    this.selectedProfessor = professor;
    accordion.value='';
    this.propagateChange(this.selectedProfessor.ProId);
  }

}
