import { Component, EventEmitter, Output, Inject, ViewChild } from '@angular/core';
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
  elem: any;
  isAudioPlaying: boolean = false;

  @ViewChild('youtubePlayer') youtubePlayer: any;

  constructor(
    public dialog: MatDialog,
    private backgroundService: BackgroundService,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.elem = document.documentElement;
  }

  showWeatherContainer: boolean = false;
  showPomodoroContainer: boolean = false;
  showTodoListContainer: boolean = false;

  showNavbar = true;

  isFullscreen: boolean = false;

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

  toggleFullscreen() {
    if (this.isFullscreen === false) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
      this.isFullscreen = true;
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
      this.isFullscreen = false;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.backgroundService.changeBackground(result);
      }
    });
  };

  startRain() {
    const audio = document.getElementById('rainy-sound') as HTMLAudioElement;
    if (this.isAudioPlaying) {
      audio.pause();
      this.isAudioPlaying = false;
    } else {
      audio.play();
      this.isAudioPlaying = true;
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
