import { Shape } from './Shape';

type Radius = number | null;

export class Circle extends Shape {
  private radius: Radius;

  constructor() {
    super();

    this.radius = null;
  }

  getRadius(): Radius {
    return this.radius;
  }

  setRadius(radius: Radius) {
    this.radius = radius;
  }

  clone(): Circle {
    return new Circle();
  }
}
