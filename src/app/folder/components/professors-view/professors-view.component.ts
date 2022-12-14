import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ProfessorService } from 'src/app/core';
import { Professor } from 'src/app/core';
import { ProfessorsDetailsComponent } from 'src/app/core/components/professors-details/professors-details.component';

@Component({
  selector: 'app-professors-view',
  templateUrl: './professors-view.component.html',
  styleUrls: ['./professors-view.component.scss'],
})
export class ProfessorsViewComponent implements OnInit {


  
  constructor(
    private professorSvc: ProfessorService,
    private modal: ModalController,
    private alert: AlertController
  ) {}

  ngOnInit() {}


  getProfessor(){
    return this.professorSvc._professor$;
  }

  async presentProfessorForm(professor:Professor){
    const modal = await this.modal.create({
      component:ProfessorsDetailsComponent,
      componentProps:{
        professor:professor
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.professorSvc.addProfessor(result.data.professor);
            break;
          case 'Edit':
            this.professorSvc.updateProfessor(result.data.professor);
            break;
          default:
        }
      }
    });
  }



  onNewProfessor(){
    this.presentProfessorForm(null);  
  }


  onEditProfessor(professor: Professor){
    this.presentProfessorForm(professor);
  }

  async onDeleteAlert(professor : Professor){
    const alert = await this.alert.create({
      header:'Atención',
      message: '¿Está seguro de que desear borrar al profesor?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.professorSvc.deleteProfessorById(professor.ProId);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
