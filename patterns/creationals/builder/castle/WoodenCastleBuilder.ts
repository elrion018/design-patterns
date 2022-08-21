import { CastleBuilder } from './CastleBuilder';
import { WoodenCastle } from './WoddenCastle';

export class WoodenCastleBuilder implements CastleBuilder {
  private castle: WoodenCastle;

  constructor(castle: WoodenCastle) {
    this.castle = castle;
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
