import { MusicPlayer } from './MusicPlayer';
import { PlayState } from './PlayState';
import { State } from './State';

export class ReadyState extends State {
  constructor(musicPlayer: MusicPlayer) {
    super(musicPlayer);
  }

  play(): void {
    this.musicPlayer.changeState(new PlayState(this.musicPlayer));
  }
}
