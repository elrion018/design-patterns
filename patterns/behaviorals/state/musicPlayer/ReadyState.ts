import { MusicPlayer } from './MusicPlayer';
import { State } from './State';

export class ReadyState extends State {
  constructor(musicPlayer: MusicPlayer) {
    super(musicPlayer);
  }
}
