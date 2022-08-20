import { Kitchen } from './Kitchen';

interface Command {
  execute(): void;
}

export class Waiter implements Command {
  private kitchen: Kitchen;
  private orderSheet: string;

  constructor(kitchen: Kitchen, orderSheet: string) {
    this.kitchen = kitchen;
    this.orderSheet = orderSheet;
  }

  public execute(): void {
    this.kitchen.cook(this.orderSheet);
  }
}
