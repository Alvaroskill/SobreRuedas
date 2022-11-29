import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ProfessorsViewComponent } from './components/professors-view/professors-view.component';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  imports: [
    FolderPageRoutingModule,
    CoreModule,
    
    
  ],
  declarations: [FolderPage, ProfessorsViewComponent, HomeComponent]
})
export class FolderPageModule {}
