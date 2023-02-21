import { Component } from '@angular/core';

@Component({
  selector: 'app-music-landing',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MusicLandingComponent {
  showTodoListContainer: boolean = false;
  showPomodoroContainer: boolean = false;
  showWeatherContainer: boolean = false;

  onShowTodoListChanged(value: boolean) {
    this.showTodoListContainer = value;
  }

  onShowWeatherContainerChanged(value: boolean) {
    this.showWeatherContainer = value;
  }
 
  onShowPomodoroContainerChanged(value: boolean) {
    this.showPomodoroContainer = value;
  }
}