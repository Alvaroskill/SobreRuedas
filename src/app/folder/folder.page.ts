import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfessorService } from '../core';
import { ProfessorsDetailsComponent } from '../core/components/professors-details/professors-details.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  

  constructor(
    private professorSvc:ProfessorService,
    private modal:ModalController,
    private activatedRoute: ActivatedRoute) {}


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  } 
  
  async presentForm(_class: typeof ProfessorsDetailsComponent, onDismiss:(any)=>void){
      const modal = await this.modal.create({
        component:_class,
        cssClass:"modal-full-right-side"
      });
      modal.present();
      modal.onDidDismiss().then(result=>{
        if(result && result.data){
          onDismiss(result.data);
        }
      });
    }


}
