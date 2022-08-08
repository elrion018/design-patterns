import { MusicPlayer } from './MusicPlayer';
import { State } from './State';

export class PlayState extends State {
  constructor(musicPlayer: MusicPlayer) {
    super(musicPlayer);
  }
}
