import { LockedState } from './LockedState';
import { MusicPlayer } from './MusicPlayer';
import { ReadyState } from './ReadyState';
import { State } from './State';

export class PlayState extends State {
  constructor(musicPlayer: MusicPlayer) {
    super(musicPlayer);
  }

  clickLock(): void {
    this.musicPlayer.stopPlayback();
    this.musicPlayer.changeState(new LockedState(this.musicPlayer));
  }

  clickPlay(): void {
    this.musicPlayer.stopPlayback();
    this.musicPlayer.changeState(new ReadyState(this.musicPlayer));
  }

  clickNext(): void {
    this.musicPlayer.stopPlayback();
    this.musicPlayer.nextMusic();
  }

  clickPrev(): void {
    this.musicPlayer.stopPlayback();
    this.musicPlayer.prevMusic();
  }
}
