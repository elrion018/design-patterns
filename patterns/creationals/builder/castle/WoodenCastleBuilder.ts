import { CastleBuilder } from './CastleBuilder';
import { WoodenCastle } from './WoodenCastle';

export class WoodenCastleBuilder implements CastleBuilder {
  private castle: WoodenCastle;

  constructor() {
    this.castle = new WoodenCastle();
  }

  getCastle() {
    const castle = this.castle;

    this.reset();

    return castle;
  }

  reset() {
    this.castle = new WoodenCastle();
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
