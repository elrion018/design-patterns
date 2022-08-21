import { CastleBuilder } from './CastleBuilder';

export class CastleDirector {
  private builder: CastleBuilder | null;

  constructor() {
    this.builder = null;
  }

  setBuilder(builder: CastleBuilder) {
    this.builder = builder;
  }

  buildMinimalFeaturedCastle() {
    if (!this.builder) return;

    this.builder.buildGate();
    this.builder.buildWall();
  }

  buildFullFeaturedCastle() {
    if (!this.builder) return;

    this.builder.buildGate();
    this.builder.buildWall();
    this.builder.buildTower();
    this.builder.buildPalace();
  }
}
