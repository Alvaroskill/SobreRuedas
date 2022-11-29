import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Professors', url: '/folder/Professors-view', icon: 'person' },
    { title: 'Students', url: '/folder/Students', icon: 'people' },
    { title: 'Lessons', url: '/folder/Lessons', icon: 'car-sport' },
    { title: 'Dates', url: '/folder/Archived', icon: 'calendar' },

  ];
  constructor() {}
}
