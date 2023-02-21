import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volumen-control',
  templateUrl: './volumen-control.component.html',
  styleUrls: ['./volumen-control.component.css']
})
export class VolumenControlComponent implements OnInit {
  currentVolume: number = 50;

  ngOnInit() {
    const savedVolume = localStorage.getItem('volume');
    if (savedVolume !== null) {
      this.currentVolume = parseInt(savedVolume, 10);
      this.setVolume(this.currentVolume);
    }
  }

  changeVolume(event: Event) {
    let volume = (event.target as HTMLInputElement).value;
    this.setVolume(+volume);
  }

  setVolume(volume: number) {
    this.currentVolume = volume;
    localStorage.setItem('volume', volume.toString());
    document.getElementsByTagName('audio')[0].volume = volume / 100;
  }
}
