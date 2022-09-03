import { Data } from './DataSource';
import { DataSourceDecorator } from './DataSourceDecorator';

export class CompressionDecorator extends DataSourceDecorator {
  write(data: Data): void {
    // 1. 데이터를 압축한다.
    // 2. 압축된 데이터를 wrappee에 넘긴다. -> super.write(data)
  }

  read(): Data {
    // 1. 데이터를 wrappee로 부터 읽는다. -> let data = super.read()
    // 2. 읽어온 데이터를 압축해제한다.
    // 3. 결과를 반환한다.
  }
}
