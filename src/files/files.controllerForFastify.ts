import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Req,
  Res,
  StreamableFile,
  UseGuards,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { createWriteStream } from 'fs';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { pipeline } from 'stream';
import { FilesService } from './files.service';

@Controller('file')
export class FilesControllerForFastify {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async uploadFile(
    @Req() req: FastifyRequest,
    @Res() reply: FastifyReply,
  ): Promise<void> {
    const { file, filename } = await req.file();

    pipeline(
      file,
      createWriteStream(`${__dirname}/../../src/files/uploads/${filename}`),
      (err) => {
        if (err) {
          throw new InternalServerErrorException(err.message);
        }
        reply.send(
          `The file ${filename} is uploaded to the src/files/uploads folder`,
        );
      },
    );
  }

  @Get(':name')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('name') name: string): StreamableFile {
    return this.filesService.findOne(name);
  }
}
