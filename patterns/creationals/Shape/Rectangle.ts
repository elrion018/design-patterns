import { Shape } from './Shape';

type Width = number | null;
type Height = number | null;

export class Rectangle extends Shape {
  private width: Width;
  private height: Height;

  constructor() {
    super();

    this.width = null;
    this.height = null;
  }

  getWidth() {
    return this.width;
  }

  setWidth(width: Width) {
    this.width = width;
  }

  getHeight() {
    return this.height;
  }

  setHeight(height: Height) {
    this.height = height;
  }

  clone(): Rectangle {
    return new Rectangle();
  }
}
