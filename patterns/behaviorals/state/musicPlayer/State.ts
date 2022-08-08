import { MusicPlayer } from './MusicPlayer';

export class State {
  musicPlayer: MusicPlayer;

  constructor(musicPlayer: MusicPlayer) {
    this.musicPlayer = musicPlayer;
  }

  clickLock() {}

  clickPlay() {}

  clickNext() {}

  clickPrevious() {}
}
