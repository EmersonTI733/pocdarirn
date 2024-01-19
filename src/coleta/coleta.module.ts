import { Module } from '@nestjs/common';
import { ColetaService } from './coleta.service';
import { ColetaController } from './coleta.controller';
import { Prisma } from '@prisma/client';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ColetaController],
  providers: [ColetaService],
  imports: [PrismaModule]
})
export class ColetaModule {}
