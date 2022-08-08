import { State } from './State';

import { ReadyState } from './ReadyState';
import { MusicList } from './MusicList';
import { Music } from './Music';

export class MusicPlayer {
  private state: State;
  private musicList: MusicList;
  private currentMusic: Music | null;

  constructor() {
    this.state = new ReadyState(this);
    this.musicList = new MusicList(this, []);
    this.currentMusic = this.musicList.getCurrentMusic();
  }

  changeState(nextState: State) {
    this.state = nextState;
  }

  getCurrentMusic() {
    return this.currentMusic;
  }

  clickPlay() {
    this.state.clickPlay();
  }

  clickLock() {
    this.state.clickPlay();
  }

  clickNextMusic() {
    this.musicList.nextMusic();
  }

  clickPrevMusic() {
    this.musicList.prevMusic();
  }

  startPlayback() {
    this.currentMusic?.startPlayback();
  }

  stopPlayback() {
    this.currentMusic?.stopPlayback();
  }

  rewindToFirst() {
    this.currentMusic?.rewindToFirst();
  }
}
