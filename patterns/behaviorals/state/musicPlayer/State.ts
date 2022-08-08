import { MusicPlayer } from './MusicPlayer';

export class State {
  musicPlayer: MusicPlayer;

  constructor(musicPlayer: MusicPlayer) {
    this.musicPlayer = musicPlayer;
  }

  lock() {}

  play() {}

  next() {}

  previous() {}
}
