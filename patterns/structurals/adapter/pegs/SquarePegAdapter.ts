import { RoundPeg } from './RoundPeg';
import { SquarePeg } from './SquarePeg';

export class SquarePegAdapter extends RoundPeg {
  peg: SquarePeg;
  radius: number;

  constructor(peg: SquarePeg) {
    super();
    this.peg = peg;
    this.radius = this.makeRadiusWithWidth();
  }

  makeRadiusWithWidth() {
    return (this.peg.getWidth() * Math.sqrt(2)) / 2;
  }

  getRadius(): number {
    return this.radius;
  }
}
