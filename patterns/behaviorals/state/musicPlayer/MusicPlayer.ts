import { State } from './State';

import { ReadyState } from './ReadyState';
import { Music } from './Music';

export class MusicPlayer {
  private state: State;
  private currentMusic: Music;

  constructor() {
    this.state = new ReadyState(this);
    this.currentMusic = new Music(this, 400);
  }

  changeState(nextState: State) {
    this.state = nextState;
  }

  clickPlay() {
    this.state.clickPlay();
  }

  clickLock() {
    this.state.clickPlay();
  }

  startPlayback() {}

  stopPlayback() {}

  nextMusic() {}

  prevMusic() {}
}
