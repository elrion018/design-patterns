import { Button } from './Button';
import { Dialog } from './Dialog';
import { WindowsButton } from './WindowsButton';

export class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton();
  }
}
