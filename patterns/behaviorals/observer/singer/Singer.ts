import { Fan } from './Fan';
import { Song } from './Song';

export class Singer {
  private fans: Fan[];
  private songs: Song[];

  constructor() {
    this.fans = [];
    this.songs = [];
  }

  releaseNewSong(name: string, lyrics: string) {
    const newSong = new Song(name, lyrics);

    this.songs.push(newSong);
    this.notify(newSong);
  }

  subscribe(fan: Fan) {
    this.fans.push(fan);
  }

  unsubscribe(fan: Fan) {
    this.fans = this.fans.filter((registered) => registered !== fan);
  }

  notify(song: Song) {
    this.fans.forEach((fan) => fan.listen(song));
  }
}
