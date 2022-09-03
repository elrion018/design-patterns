import { Data } from './DataSource';
import { DataSourceDecorator } from './DataSourceDecorator';

export class EncryptionDecorator extends DataSourceDecorator {
  write(data: Data): void {
    // 1. 데이터를 암호화한다.
    // 2. 암호화한 데이터를 wrappee에 넘긴다. -> super.write(data)
  }

  read(): Data {
    // 1. 데이터를 wrappee로 부터 읽는다. -> let data = super.read()
    // 2. 읽어온 데이터를 복호화한다.
    // 3. 결과를 반환한다.
  }
}
