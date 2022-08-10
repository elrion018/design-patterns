export class Database {
  private static instance: Database | null;

  constructor() {
    Database.instance = null;
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  query(sql: string) {
    // ... 데이터베이스에 작성된 SQL 문에 따라 query를 날리는 로직
    // ...
  }
}
