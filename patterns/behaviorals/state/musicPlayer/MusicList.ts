import { Music } from './Music';
import { MusicPlayer } from './MusicPlayer';

export class MusicList {
  musicPlayer: MusicPlayer;
  musicList: Music[];
  currentIndex: number;

  constructor(musicPlayer: MusicPlayer, musicList: Music[]) {
    this.musicPlayer = musicPlayer;
    this.musicList = musicList;
    this.currentIndex = 0;
  }

  getCurrentMusic() {
    if (this.musicList.length) return this.musicList[this.currentIndex];

    return null;
  }

  nextMusic() {
    if (this.currentIndex < this.musicList.length) this.currentIndex++;
  }

  prevMusic() {
    if (this.currentIndex > 0) this.currentIndex--;
  }
}
