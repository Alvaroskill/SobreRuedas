import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { ProfessorService } from 'src/app/core/services/';
import { isLowResolution as lowres} from 'src/app/utils/screen.util'
import { Professor } from 'src/app/core/models/professor.model';
import { ProfessorsDetailsComponent } from '../professors-details/professors-details.component';



@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss'],
})



export class ProfessorComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  
  @Input() professor : Professor;


  ngOnInit() {}

  onEditClick(){
    this.onEdit.emit(this.professor);
  }

  onDeleteClick(){
    this.onDelete.emit(this.professor);
  }

}


