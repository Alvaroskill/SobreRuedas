import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from './core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Professors', url: '/folder/Professors', icon: 'person' },
    { title: 'Students', url: '/folder/Students', icon: 'people' },
    { title: 'Lessons', url: '/folder/Lessons', icon: 'car-sport' },
    { title: 'About Me', url: '/folder/AboutMe', icon: 'information' },

  ];
  public labels = [];

  language = 1; // 0 español, 1 inglés
  constructor(
    private translate: TranslateService,
    private locale:LocaleService
  ) {
    this.translate. setDefaultLang('en');
  }
  onLanguage(){
    this.language = (this.language+1)%2;
    switch(this.language){
      case 0:
        this.translate.setDefaultLang('es');
        this.locale.registerCulture('es');

        break;
      case 1:
        this.translate.setDefaultLang('en');
        this.locale.registerCulture('en');
        break;
    }
  }
}
