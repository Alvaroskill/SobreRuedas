import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../utils/translate';
import { HttpClient } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import es from '@angular/common/locales/es'
import { ProfessorComponent } from './components/professor/professor.component';
import { ProfessorsDetailsComponent } from './components';
import { ProfessorService } from './services';
import { RouterModule } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';

import { LessonsDetailsComponent } from './components/lessons-details/lessons-details.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { ProfessorSelectableComponent } from './components/professor-selectable/professor-selectable.component';
import { StudentSelectableComponent } from './components/student-selectable/student-selectable.component';
import { DateTimeSelectableComponent } from './components/date-time-selectable/date-time-selectable.component';




registerLocaleData(es);
@NgModule({
  declarations: [
    ProfessorComponent,
    ProfessorsDetailsComponent,
    StudentComponent,
    StudentsDetailsComponent,
    LessonComponent,
    LessonsDetailsComponent,
    ProfessorSelectableComponent,
    StudentSelectableComponent,
    DateTimeSelectableComponent
    

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
    StudentComponent,
    StudentsDetailsComponent,
    LessonComponent,
    LessonsDetailsComponent,
    ProfessorSelectableComponent,
    StudentComponent,
    DateTimeSelectableComponent


  ],
  
  providers: [{

    provide: LOCALE_ID,
    useValue: 'es'

},
]


})

export class CoreModule { }
