import { Button } from './Button';

export class WebButton implements Button {
  render(): void {
    // .. web 용 버튼을 렌더링하는 로직
  }

  onClick(callback: Function): void {
    // .. web용 클릭이벤트를 받아 실행하는 로직
  }
}
