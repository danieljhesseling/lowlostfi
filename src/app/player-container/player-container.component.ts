import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.css']
})
export class PlayerContainerComponent {
  showYoutubeContainer: boolean = false;
  showSpotifyContainer: boolean = false;

  constructor(@Inject(DOCUMENT) private document: any) {}

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

  getYoutubeUrl(youtubeId: string) {
    let youtubePlayer = this.document.getElementById('youtubePlayer');
    youtubePlayer.setAttribute('src', `https://www.youtube.com/embed/${youtubeId}`);
  }

  getSpotifyUrl(spotifyId: string) {
    let spotifyPlayer = this.document.getElementById('spotifyPlayer');
    spotifyPlayer.setAttribute('src', `https://open.spotify.com/embed/playlist/${spotifyId}?utm_source=generator`)
  }
}
