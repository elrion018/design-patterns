import { CompressionDecorator } from './CompressionDecorator';
import { Data } from './DataSource';
import { EncryptionDecorator } from './EncryptionDecorator';
import { FileDataSource } from './FileDataSource';

let source = new FileDataSource('somefile.dat');
const salaryRecords: Data = { name: '김 아무개', age: 31, salary: 60000000 };

source.write(salaryRecords);

source = new CompressionDecorator(source);
source.write(salaryRecords);

source = new EncryptionDecorator(source);
source.write(salaryRecords);
