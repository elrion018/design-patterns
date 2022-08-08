import { LockedState } from './LockedState';
import { MusicPlayer } from './MusicPlayer';
import { PlayState } from './PlayState';
import { State } from './State';

export class ReadyState extends State {
  constructor(musicPlayer: MusicPlayer) {
    super(musicPlayer);
  }

  clickPlay(): void {
    this.musicPlayer.startPlayback();
    this.musicPlayer.changeState(new PlayState(this.musicPlayer));
  }

  clickLock(): void {
    this.musicPlayer.stopPlayback();
    this.musicPlayer.changeState(new LockedState(this.musicPlayer));
  }

  clickNext(): void {
    this.musicPlayer.rewindToFirst();
    this.musicPlayer.nextMusic();
  }

  clickPrev(): void {
    this.musicPlayer.rewindToFirst();
    this.musicPlayer.prevMusic();
  }
}
