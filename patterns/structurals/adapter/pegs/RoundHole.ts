import { RoundPeg } from './RoundPeg';

export class RoundHole {
  radius: number;

  constructor(radius: number = 0) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  fit(roundPeg: RoundPeg) {
    return this.getRadius() >= roundPeg.getRadius();
  }
}
