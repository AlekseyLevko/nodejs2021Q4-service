import {
  Controller,
  Get,
  Param,
  Post,
  StreamableFile,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FilesService } from './files.service';

@Controller('file')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return `The file ${file.originalname} is uploaded to the src/files/uploads folder`;
  }

  @Get(':name')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('name') name: string): StreamableFile {
    return this.filesService.findOne(name);
  }
}
