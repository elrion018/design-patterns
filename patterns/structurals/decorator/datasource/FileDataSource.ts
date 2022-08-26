import { Data, DataSource } from './DataSource';

export class FileDataSource implements DataSource {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  write(data: Data): void {
    // data를 파일에 저장한다(쓴다).
  }

  read(): Data {
    // data를 파일로부터 읽는다.
  }
}
