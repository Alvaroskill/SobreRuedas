import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ProfessorsViewComponent } from './components/professors-view/professors-view.component';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './components/home/home.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { LessonsViewComponent } from './components/lessons-view/lessons-view.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../utils/translate';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports: [
    FolderPageRoutingModule,
    CoreModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      })
    
    
    
  ],
  declarations: [FolderPage, ProfessorsViewComponent, HomeComponent, StudentViewComponent, LessonsViewComponent, AboutmeComponent]
})
export class FolderPageModule {}
