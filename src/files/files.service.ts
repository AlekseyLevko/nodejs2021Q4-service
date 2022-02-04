import {
  Injectable,
  InternalServerErrorException,
  StreamableFile,
} from '@nestjs/common';
import * as fs from 'fs';
import { createReadStream } from 'fs';

@Injectable()
export class FilesService {
  findOne(name: string): StreamableFile {
    const pathToFile = `${__dirname}/../../src/files/uploads/${name}`;

    if (!fs.existsSync(pathToFile)) {
      throw new InternalServerErrorException(`File ${name} doesn't exist`);
    }

    const fileStream = createReadStream(pathToFile);

    return new StreamableFile(fileStream);
  }
}
