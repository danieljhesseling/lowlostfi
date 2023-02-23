import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BackgroundService } from '../../app/background.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    public dialog: MatDialog,
    private backgroundService: BackgroundService,
    @Inject(DOCUMENT) private document: any) { }

  showWeatherContainer: boolean = false;
  showPomodoroContainer: boolean = false;
  showTodoListContainer: boolean = false;

  showNavbar = true;

  @Output() showTodoListChanged = new EventEmitter<boolean>();
  @Output() showPomodoroChanged = new EventEmitter<boolean>();
  @Output() showWeatherChanged = new EventEmitter<boolean>();


  toggleTodoList() {
    this.showTodoListContainer = !this.showTodoListContainer;
    this.showTodoListChanged.emit(this.showTodoListContainer);
  }

  togglePomodoro() {
    this.showPomodoroContainer = !this.showPomodoroContainer;
    this.showPomodoroChanged.emit(this.showPomodoroContainer);
  }

  toggleWeather() {
    this.showWeatherContainer = !this.showWeatherContainer;
    this.showWeatherChanged.emit(this.showWeatherContainer);
  }

  onSidenavToggle() {
    // When sidenav is opened
    const matsidenav = document.getElementById('sidenav') as HTMLDivElement;
    if(this.showNavbar === true) {
      matsidenav.classList.add('show');
    } else {
      matsidenav.classList.add('hide');
    }
  }

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  showPomodoro() {
    if (this.showPomodoroContainer === false) {
      this.showPomodoroContainer = true;
    } else {
      this.showPomodoroContainer = false;
    }
  }

  showWeather() {
    if (this.showWeatherContainer === false) {
      this.showWeatherContainer = true;
    } else {
      this.showWeatherContainer = false;
    }
  }
}
