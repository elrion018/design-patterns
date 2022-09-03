export interface Data {
  name: string;
  age: number;
  salary: number;
}

export interface DataSource {
  write(data: Data): void;
  read(): Data;
}
