import { MusicPlayer } from './MusicPlayer';
import { State } from './State';

export class LockedState extends State {
  constructor(musicPlayer: MusicPlayer) {
    super(musicPlayer);
  }
}
