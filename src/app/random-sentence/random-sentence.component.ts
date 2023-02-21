import { Component } from '@angular/core';

@Component({
  selector: 'app-random-sentence',
  templateUrl: './random-sentence.component.html',
  styleUrls: ['./random-sentence.component.css']
})
export class RandomSentenceComponent {
  sentences: string[] = [
    'The quick brown fox jumps over the lazy dog.',
    'She sells seashells by the seashore.',
    'All work and no play makes Jack a dull boy.',
    'The rain in Spain stays mainly in the plain.',
    'I scream, you scream, we all scream for ice cream.'
  ];
  sentence: string = '';

  constructor() {
    this.generateSentence();
  }

  generateSentence() {
    const randomIndex = Math.floor(Math.random() * this.sentences.length);
    this.sentence = this.sentences[randomIndex];
  }
}
