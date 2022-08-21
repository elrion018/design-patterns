import { CastleBuilder } from './CastleBuilder';
import { StoneCastle } from './StoneCastle';

export class StoneCastleBuilder implements CastleBuilder {
  private castle: StoneCastle;

  constructor() {
    this.castle = new StoneCastle();
  }

  getCastle() {
    return this.castle;
  }

  reset() {
    this.castle = new StoneCastle();
  }

  buildGate(): void {
    this.castle.buildGate();
  }

  buildTower(): void {
    this.castle.buildTower();
  }

  buildWall(): void {
    this.castle.buildWall();
  }

  buildPalace(): void {
    this.castle.buildPalace();
  }
}
