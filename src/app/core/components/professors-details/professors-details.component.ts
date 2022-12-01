import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Professor } from '../../models';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professors-details.component.html',
  styleUrls: ['./professors-details.component.scss'],
})
export class ProfessorsDetailsComponent implements OnInit {

  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('professor') set professor(professor:Professor){
    if(professor){
      this.form.controls.id.setValue(professor.id);
      this.form.controls.ProName.setValue(professor.ProName);
      this.form.controls.ProSurname.setValue(professor.ProSurname);
      this.form.controls.ProAge.setValue(professor.ProAge);
      this.form.controls.ProPicture.setValue(professor.ProPicture);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],
      ProName:['', [Validators.required]],
      ProSurname:['', [Validators.required]],
      ProAge:['', [Validators.required]],
      ProPicture:['']
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    
    this.modal.dismiss({professor: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

}
