import { 대장장이, 방패, 칼 } from './interfaces';

export class 대장간 {
  대장장이: 대장장이;

  constructor(대장장이: 대장장이) {
    this.대장장이 = 대장장이;
  }

  대장장이설정(대장장이: 대장장이) {
    this.대장장이 = 대장장이;
  }

  칼만들기(): 칼 {
    return this.대장장이.칼만들기();
  }

  방패만들기(): 방패 {
    return this.대장장이.방패만들기();
  }
}
