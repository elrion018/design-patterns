import { Button } from './Button';
import { Dialog } from './Dialog';
import { WebButton } from './WebButton';

export class WebDialog extends Dialog {
  createButton(): Button {
    return new WebButton();
  }
}
