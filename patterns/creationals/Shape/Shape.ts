import { Prototype } from './interfaces';

export interface Positions {
  xPosition: number;
  yPosition: number;
}

export class Shape implements Prototype {
  private positions: Positions | null;

  constructor() {
    this.positions = null;
  }

  getPositions(): Positions | null {
    return this.positions;
  }

  setPosition(positions: Positions) {
    this.positions = positions;
  }

  clone(): Shape {
    return new Shape();
  }
}
