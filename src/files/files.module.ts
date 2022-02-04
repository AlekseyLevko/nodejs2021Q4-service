import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: async (req, file, cb) => {
          return cb(null, `${__dirname}/../../src/files/uploads`);
        },
        filename: (req, file, cb) => {
          return cb(null, file.originalname);
        },
      }),
    }),
  ],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
