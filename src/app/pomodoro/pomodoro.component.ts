import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  minutes = 0;
  seconds = 4;
  isRunning = false;
  rest = false;
  counter = 0;

  @ViewChild('pomodoroSound') pomodoroSound!: ElementRef;
  @ViewChild('restSound') restSound!: ElementRef;

  private interval: any;

  get restMessage() {

    return this.counter < 4 ? 'Take a short break' : 'Take a long break';
  }

  ngOnInit() {}

  ngAfterView() {
    debugger;
    this.pomodoroSound.nativeElement.play();
    this.restSound.nativeElement.play();
  }

  start() {
    this.isRunning = true;

    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  reset() {
    clearInterval(this.interval);
    this.isRunning = false;
    this.minutes = 25;
    this.seconds = 0;
    this.rest = false;
    this.counter = 0;
  }

  private tick() {
    if (this.seconds > 0) {
      this.seconds--;
    } else if (this.minutes > 0) {
      this.minutes--;
      this.seconds = 59;
    } else if (!this.rest) {
      this.rest = true;
      this.minutes = 5;
      this.seconds = 0;
      this.counter++;
    } else {
      clearInterval(this.interval);
      this.isRunning = false;
      this.rest = false;
      this.minutes = 25;
      this.seconds = 0;
      if (this.counter === 4) {
        this.counter = 0;
        setTimeout(() => {
          alert('Take a long break');
        }, 1000);
      }
    }
  }
}
