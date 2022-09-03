import { Button } from './Button';

export abstract class Dialog {
  abstract createButton(): Button;

  render() {
    const okButton = this.createButton();
    const closeDialog = () => {
      // .. 다이얼로그 창을 닫는 로직
    };

    okButton.onClick(closeDialog);
    okButton.render();
  }
}
