import { State } from './State';

import { ReadyState } from './ReadyState';

export class MusicPlayer {
  private state: State;

  constructor() {
    this.state = new ReadyState(this);
  }
}
