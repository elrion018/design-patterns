import { Guest } from './Guest';
import { Kitchen } from './Kitchen';
import { Waiter } from './Waiter';

const guest = new Guest();
const kitchen = new Kitchen();
const waiter = new Waiter(kitchen, '고등어 파스타, 큐브 스테이크');

guest.setWaiter(waiter);
guest.order();
