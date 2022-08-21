import { CastleBuilder } from './CastleBuilder';
import { WoodenCastle } from './WoddenCastle';

export class WoodenCastleBuilder implements CastleBuilder {
  private castle: WoodenCastle;

  constructor(castle: WoodenCastle) {
    this.castle = castle;
  }

  buildGate(): void {}

  buildTower(): void {}

  buildWall(): void {}

  buildPalace(): void {}
}
