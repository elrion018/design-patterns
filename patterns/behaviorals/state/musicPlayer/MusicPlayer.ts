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

  clickPlay() {
    this.state.clickPlay();
  }

  clickLock() {
    this.state.clickPlay();
  }

  startPlayback() {
    this.currentMusic?.startPlayback();
  }

  stopPlayback() {
    this.currentMusic?.stopPlayback();
  }

  nextMusic() {
    this.musicList.nextMusic();
  }

  prevMusic() {
    this.musicList.prevMusic();
  }

  rewindToFirst() {
    this.currentMusic?.rewindToFirst();
  }
}
