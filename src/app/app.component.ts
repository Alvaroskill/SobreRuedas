import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Proffesors', url: '/folder/Proffesors', icon: 'person' },
    { title: 'Students', url: '/folder/Students', icon: 'people' },
    { title: 'Lessons', url: '/folder/Lessons', icon: 'car-sport' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },

  ];
  constructor() {}
}
