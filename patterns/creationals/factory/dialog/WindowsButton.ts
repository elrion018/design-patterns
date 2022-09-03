import { Button } from './Button';

export class WindowsButton implements Button {
  render(): void {
    // .. 윈도우 OS 용 버튼을 렌더링하는 로직
  }

  onClick(callback: Function): void {
    // .. 윈도우 OS 용 클릭이벤트를 받아 작동하는 로직
  }
}
