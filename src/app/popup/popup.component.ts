import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { BackgroundService } from '../background.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  showWeatherContainer: boolean = false;
  showPomodoroContainer: boolean = false;
  showYoutubeContainer: boolean = false;
  showSpotifyContainer: boolean = false;
  showTodoListContainer: boolean = false;

  isAudioPlaying: boolean = false;

  showNavbar = true;

  elem: any;

  constructor(public dialog: MatDialog, private backgroundService: BackgroundService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.elem = document.documentElement;
  }

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  isFullscreen: boolean = false;

  toggleFullscreen() {
    if(this.isFullscreen === false) {
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

  showPomodoro() {
    if (this.showPomodoroContainer === false) {
      this.showPomodoroContainer = true;
    } else {
      this.showPomodoroContainer = false;
    }
  }

  showYoutube() {
    if (this.showYoutubeContainer === false) {
      this.showYoutubeContainer = true;
    } else {
      this.showYoutubeContainer = false;
    }
    this.showSpotifyContainer = false;
  }

  showSpotify() {
    if (this.showSpotifyContainer === false) {
      this.showSpotifyContainer = true;
    } else {
      this.showSpotifyContainer = false;
    }
    this.showYoutubeContainer = false;
  }

  showWeather() {
    if (this.showWeatherContainer === false) {
      this.showWeatherContainer = true;
    } else {
      this.showWeatherContainer = false;
    }
  }

  showTodoList() {
    if (this.showTodoListContainer === false) {
      this.showTodoListContainer = true;
    } else {
      this.showTodoListContainer = false;
    }
  }

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
}



