import {
  Controller,
  Get,
  Param,
  Post,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';

@Controller('file')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return `The file ${file.originalname} is uploaded to the src/files/uploads folder`;
  }

  @Get(':name')
  findOne(@Param('name') name: string): StreamableFile {
    return this.filesService.findOne(name);
  }
}
