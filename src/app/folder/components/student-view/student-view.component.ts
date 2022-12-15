import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { StudentsDetailsComponent } from 'src/app/core/components/students-details/students-details.component';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-students-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss'],
})
export class StudentViewComponent implements OnInit {
  constructor(
    private studentSvc: StudentService,
    private modal: ModalController,
    private alert: AlertController
  ) {}

  ngOnInit() {}


  getStudent(){
    return this.studentSvc._student$;
  }

  async presentStudentForm(student:Student){
    const modal = await this.modal.create({
      component:StudentsDetailsComponent,
      componentProps:{
        student:student
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.studentSvc.addStudent(result.data.student);
            break;
          case 'Edit':
            this.studentSvc.updateStudent(result.data.student);
            break;
          default:
        }
      }
    });
  }



  onNewStudent(){
    this.presentStudentForm(null);  
  }


  onEditStudent(student: Student){
    this.presentStudentForm(student);
  }

  async onDeleteAlert(student : Student){
    const alert = await this.alert.create({
      header:'Atención',
      message: '¿Está seguro de que desear borrar al alumno?',
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
            this.studentSvc.deleteStudentById(student.StuId);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }


}
