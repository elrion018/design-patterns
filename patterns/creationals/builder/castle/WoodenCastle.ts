export class WoodenCastle {
  private components: string[] = [];

  getComponents() {
    return [...this.components];
  }

  buildGate() {
    this.components.push('Wooden Gate');
  }

  buildTower() {
    this.components.push('Wooden Tower');
  }

  buildWall() {
    this.components.push('Wooden Wall');
  }

  buildPalace() {
    this.components.push('Wooden Palace');
  }
}
