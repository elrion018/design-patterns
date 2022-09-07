import { Fan } from './Fan';
import { Singer } from './Singer';

const singer = new Singer();

singer.subscribe(new Fan());
singer.subscribe(new Fan());
singer.subscribe(new Fan());

singer.releaseNewSong(
  '희재',
  '그대 떠나가는 그 순간도 나를 걱정했었나요 무엇도 해줄 수 없는 내 맘 앞에서'
);
