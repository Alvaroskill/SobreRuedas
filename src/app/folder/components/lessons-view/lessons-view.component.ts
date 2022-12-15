import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Lesson } from 'src/app/core';
import { LessonService } from 'src/app/core';
import { LessonsDetailsComponent } from 'src/app/core/components/lessons-details/lessons-details.component';


@Component({
  selector: 'app-lessons-view',
  templateUrl: './lessons-view.component.html',
  styleUrls: ['./lessons-view.component.scss'],
})
export class LessonsViewComponent implements OnInit {

  constructor(
    private lessonsSvc:LessonService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {}

  getLessons(){
    return this.lessonsSvc.Lesson$;
  }

  async presentLessonForm(lesson:Lesson){
    const modal = await this.modal.create({
      component:LessonsDetailsComponent,
      componentProps:{
        lesson:lesson
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.lessonsSvc.addLesson(result.data.lesson);
            break;
          case 'Edit':
            this.lessonsSvc.updateLesson(result.data.lesson);
            break;
          default:
        }
      }
    });
  }
  onNewLesson(){
    this.presentLessonForm(null);  
  }

  onEditLesson(lesson){
    this.presentLessonForm(lesson);
  }

  async onDeleteAlert(lesson){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar la asignación clases?',
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
            this.lessonsSvc.deleteLessonById(lesson.LesId);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteLesson(lesson){
   this.onDeleteAlert(lesson);
    
  }

}
