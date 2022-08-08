import { MusicPlayer } from './MusicPlayer';

export class Music {
  musicPlayer: MusicPlayer;
  totalPlayTime: number;
  currentPlayTime: number;

  constructor(musicPlayer: MusicPlayer, totalPlayTime: number) {
    this.musicPlayer = musicPlayer;
    this.totalPlayTime = totalPlayTime;
    this.currentPlayTime = 0;
  }

  startPlayback() {}

  stopPlayback() {}

  rewindToFirst() {
    this.currentPlayTime = 0;
  }
}
