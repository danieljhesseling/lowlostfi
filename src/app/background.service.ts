import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor() { }

  changeBackground(imageUrl: string): void {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = `url(${imageUrl})`;
  }
}