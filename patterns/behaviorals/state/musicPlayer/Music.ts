import { MusicPlayer } from './MusicPlayer';

export class Music {
  musicPlayer: MusicPlayer;
  playTime: number;

  constructor(musicPlayer: MusicPlayer, playTime: number) {
    this.musicPlayer = musicPlayer;
    this.playTime = playTime;
  }

  startPlayback() {

  }

  stopPlayback() {
    
  }
}
