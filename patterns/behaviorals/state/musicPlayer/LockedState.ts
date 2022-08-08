import { MusicPlayer } from './MusicPlayer';
import { State } from './State';

import { PlayState } from './PlayState';
import { ReadyState } from './ReadyState';

export class LockedState extends State {
  constructor(musicPlayer: MusicPlayer) {
    super(musicPlayer);
  }

  clickLock(): void {
    if (this.musicPlayer.getCurrentMusic()) {
      this.musicPlayer.startPlayback();
      this.musicPlayer.changeState(new PlayState(this.musicPlayer));
    } else {
      this.musicPlayer.changeState(new ReadyState(this.musicPlayer));
    }
  }
}
