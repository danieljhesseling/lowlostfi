import { Component } from '@angular/core';
import { Songs } from './models/songs';

@Component({
  selector: 'app-music-component',
  templateUrl: './music-component.component.html',
  styleUrls: ['./music-component.component.css']
})
export class MusicComponentComponent {
  isAudioPlaying: boolean = false;
  number: number = 0;

  audioSource: Songs[] = [
    {
      song: 'Silent Wood',
      link: 'https://www.chosic.com/wp-content/uploads/2022/01/silent-wood.mp3',
      artist: 'Purrple Cat'
    },
    {
      song: 'Storm Clouds',
      link: 'https://www.chosic.com/wp-content/uploads/2022/02/storm-clouds-purpple-cat.mp3',
      artist: 'Purrple Cat'
    },
    {
      song: 'Sugar Coat',
      link: 'https://www.chosic.com/wp-content/uploads/2022/01/sugar-coat.mp3',
      artist: 'Purrple Cat'
    },
    {
      song: 'Cozy Fireplace',
      link: 'https://www.chosic.com/wp-content/uploads/2022/01/Cozy-Fireplace.mp3',
      artist: 'Purrple Cat'
    },
    {
      song: 'Memories of Spring',
      link: 'https://www.chosic.com/wp-content/uploads/2022/10/Memories-of-Spring.mp3',
      artist: 'Tokyo Music Walker'
    },
    {
      song: 'Soon We’ll Fly',
      link: 'https://www.chosic.com/wp-content/uploads/2022/03/Ghostrifter-Official-Soon-Well-Fly.mp3',
      artist: 'Ghostrifter Official'
    },
    {
      song: 'Dreams Come True',
      link: 'https://www.chosic.com/wp-content/uploads/2021/07/purrple-cat-dreams-come-true.mp3',
      artist: 'Purrple Cat'
    },
    {
      song: 'Still Awake',
      link: 'https://www.chosic.com/wp-content/uploads/2021/09/Still-Awake-Lofi-Study-Music.mp3',
      artist: 'Ghostrifter Official'
    },
    {
      song: 'City Life',
      link: 'https://www.chosic.com/wp-content/uploads/2022/10/City-Life.mp3',
      artist: 'Artificial.Music'
    },
    {
      song: 'Morning Routine',
      link: 'https://www.chosic.com/wp-content/uploads/2021/09/Morning-Routine-Lofi-Study-Music.mp3',
      artist: 'Ghostrifter Official'
    },
    {
      song: 'bedtime after a coffee',
      link: 'https://www.chosic.com/wp-content/uploads/2020/11/barradeen-bedtime-after-a-coffee.mp3',
      artist: 'Barradeen'
    },
    {
      song: 'Missing You',
      link: 'https://www.chosic.com/wp-content/uploads/2022/01/Missing-You.mp3',
      artist: 'Purrple Cat'
    },
    {
      song: 'And So It Begins',
      link: 'https://www.chosic.com/wp-content/uploads/2021/04/And-So-It-Begins-Inspired-By-Crush-Sometimes.mp3',
      artist: 'Artificial.Music'
    }
  ];

  startMusic() {
    const audio = document.getElementById('sound') as HTMLAudioElement;
    if (this.isAudioPlaying) {
      audio.pause();
      this.isAudioPlaying = false;
    } else {
      audio.play();
      this.isAudioPlaying = true;
      audio.addEventListener('ended', () => {
        this.nextSong();
      });
    }
  }

  nextSong() {
    const song = document.getElementById('song') as HTMLSourceElement;
  
    // Check if this is the last song in the array
    if (this.number === this.audioSource.length - 1) {
      this.number = 0; // Start from the first song
    } else {
      this.number++; // Go to the next song
    }
  
    if (typeof this.audioSource[this.number].link === 'string') {
      song.src = this.audioSource[this.number].link ?? '';
      const audio = document.getElementById('sound') as HTMLAudioElement;
      audio.load();
      audio.play();
      this.isAudioPlaying = true;
    }
  }
  
  lastSong() {
    const song = document.getElementById('song') as HTMLSourceElement;
    if (this.number > 0) {
      this.number--;
    } else {
      this.number = this.audioSource.length - 1;
    }
    if (typeof this.audioSource[this.number].link === 'string') {
      song.src = this.audioSource[this.number].link ?? '';
      const audio = document.getElementById('sound') as HTMLAudioElement;
      audio.load();
      audio.play();
      this.isAudioPlaying = true;
    }
  }


}
