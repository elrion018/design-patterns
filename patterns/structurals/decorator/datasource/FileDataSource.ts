export class FileDataSource implements DataSource {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  write(data: Data): void {
    // ... Write data to file.
  }

  read(): Data {
    // ... read data from file.
  }
}
