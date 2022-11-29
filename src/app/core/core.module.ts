import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../utils/translate';
import { HttpClient } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import es from '@angular/common/locales/es'
import { ProfessorComponent } from './components/professor/professor.component';
import { ProfessorsDetailsComponent } from './components/professors-details/professors-details.component';
import { ProfessorService } from './services';
import { RouterModule } from '@angular/router';



registerLocaleData(es);
@NgModule({
  declarations: [
    ProfessorComponent,
    ProfessorsDetailsComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports:[
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProfessorComponent,
    ProfessorsDetailsComponent,

  ],
  
  providers: [{

    provide: LOCALE_ID,
    useValue: 'es'

},
]


})

export class CoreModule { }
