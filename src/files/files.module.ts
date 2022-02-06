import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import config from '../common/config';
import { FilesController } from './files.controller';
import { FilesControllerForFastify } from './files.controllerForFastify';
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
  controllers: [
    config().USE_FASTIFY ? FilesControllerForFastify : FilesController,
  ],
  providers: [FilesService],
})
export class FilesModule {}
