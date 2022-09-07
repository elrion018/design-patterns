import { Song } from './Song';

export class Fan {
  listen(song: Song) {
    console.log(
      `이번에 새로 발매된 ${song.name} 이라는 노래의 ${song.lyrics} 이라는 가사 진짜 좋더라!`
    );
  }
}
