import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

/**
 * 프로토타입(Prototype) 패턴의 예제로서 Shape, Rectangle, Circle 모듈 구현
 */
const circle = new Circle();

circle.setPosition({
  xPosition: 2,
  yPosition: 10,
});
circle.setRadius(5);

const copiedCircle = circle.clone();
const rectangle = new Rectangle();

rectangle.setHeight(10);
rectangle.setWidth(10);

const copied = rectangle.clone();
