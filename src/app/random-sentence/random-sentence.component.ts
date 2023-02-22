import { Component } from '@angular/core';

@Component({
  selector: 'app-random-sentence',
  templateUrl: './random-sentence.component.html',
  styleUrls: ['./random-sentence.component.css']
})
export class RandomSentenceComponent {
  sentences: string[] = [
    "Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill",
    "It is better to fail in originality than to succeed in imitation. — Herman Melville",
    "The road to success and the road to failure are almost exactly the same. — Colin R. Davis",
    "Success usually comes to those who are too busy looking for it. — Henry David Thoreau",
    "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. — Dale Carnegie"
      ];
  sentence: string = '';
  author: string = '';

  constructor() {
    this.generateSentence();
  }

  generateSentence() {
    const randomIndex = Math.floor(Math.random() * this.sentences.length);
    const parts = this.sentences[randomIndex].split(' — ');
    this.sentence = parts[0];
    this.author = parts[1];
  }
}
