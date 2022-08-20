import { Waiter } from './Waiter';

export class Guest {
  private waiter: Waiter | null;

  constructor() {
    this.waiter = null;
  }

  public setWaiter(waiter: Waiter) {
    this.waiter = waiter;
  }

  public order() {
    if (this.checkIsWaiter(this.waiter)) this.waiter?.execute();
  }

  private checkIsWaiter(object: any): object is Waiter {
    return Boolean(object.execute);
  }
}
