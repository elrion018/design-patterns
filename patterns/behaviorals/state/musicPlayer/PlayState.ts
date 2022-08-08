import { LockedState } from './LockedState';
import { MusicPlayer } from './MusicPlayer';
import { ReadyState } from './ReadyState';
import { State } from './State';

export class PlayState extends State {
  constructor(musicPlayer: MusicPlayer) {
    super(musicPlayer);
  }

  lock(): void {
    this.musicPlayer.stopPlayback();
    this.musicPlayer.changeState(new LockedState(this.musicPlayer));
  }

  play(): void {
    this.musicPlayer.stopPlayback();
    this.musicPlayer.changeState(new ReadyState(this.musicPlayer));
  }
}
