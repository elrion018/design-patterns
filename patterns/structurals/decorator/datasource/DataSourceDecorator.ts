import { Data, DataSource } from './DataSource';

export class DataSourceDecorator implements DataSource {
  private wrappee: DataSource;

  constructor(wrappee: DataSource) {
    this.wrappee = wrappee;
  }

  write(data: Data): void {
    this.wrappee.write(data);
  }

  read(): Data {
    return this.wrappee.read();
  }
}
