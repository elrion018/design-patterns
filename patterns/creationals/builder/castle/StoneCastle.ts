export class StoneCastle {
  private components: string[] = [];

  getComponents() {
    return [...this.components];
  }

  buildGate() {
    this.components.push('Stone Gate');
  }

  buildTower() {
    this.components.push('Stone Tower');
  }

  buildWall() {
    this.components.push('Stone Wall');
  }

  buildPalace() {
    this.components.push('Stone Palace');
  }
}
