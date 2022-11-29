import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { ProfessorService } from 'src/app/core/services/';
import { isLowResolution as lowres} from 'src/app/utils/screen.util'
import { Professor } from 'src/app/core/models/professor.model';



@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss'],
})



export class ProfessorComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  
  _professor;
  @Input() set professor(p:Professor){
    this._professor = p;
    console.log(p);
  }

  get professor(){
    return this._professor;
  }



  isLowResolution:()=>boolean = lowres;
  constructor(private professorSvc:ProfessorService) { }

  ngOnInit() {}



  onEditClick(){
    this.onEdit.emit(this.professor);
  }

  onDeleteClick(){
    this.onDelete.emit(this.professor);
  }

}


