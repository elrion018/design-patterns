import { MusicPlayer } from './MusicPlayer';

export class Music {
  private musicPlayer: MusicPlayer;
  private totalPlayTime: number;
  private currentPlayTime: number;
  private timer: ReturnType<typeof setInterval> | null;

  constructor(musicPlayer: MusicPlayer, totalPlayTime: number) {
    this.musicPlayer = musicPlayer;
    this.totalPlayTime = totalPlayTime;
    this.currentPlayTime = 0;
    this.timer = null;
  }

  startPlayback() {
    this.timer = setInterval(() => {
      this.currentPlayTime++;

      if (this.currentPlayTime >= this.totalPlayTime) {
        this.rewindToFirst();
        this.stopPlayback();
        this.musicPlayer.nextMusic();

        this.timer = null;
      }
    }, 1000);
  }

  stopPlayback() {
    if (this.timer) clearInterval(this.timer);
  }

  rewindToFirst() {
    this.currentPlayTime = 0;
  }
}
