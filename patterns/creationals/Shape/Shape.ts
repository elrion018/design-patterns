import { Prototype } from './interfaces';

interface Positions {
  xPosition: number;
  yPosition: number;
}

export class Shape implements Prototype {
  positions: Positions;

  constructor(positions: Positions) {
    this.positions = positions;
  }

  getPositions(): Positions {
    return this.positions;
  }

  clone(): Shape {
    return new Shape(this.positions);
  }
}
