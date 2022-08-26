interface Data {
  name: string;
  age: number;
  salary: number;
}

interface DataSource {
  write(data: Data): void;
  read(): Data;
}
