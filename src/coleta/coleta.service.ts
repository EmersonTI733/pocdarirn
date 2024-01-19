import { Injectable } from '@nestjs/common';
import { CreateColetaDto } from './dto/create-coleta.dto';
import { UpdateColetaDto } from './dto/update-coleta.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColetaService {
  constructor(private prisma: PrismaService){}

  create(createColetaDto: CreateColetaDto) {
    return this.prisma.coleta.create({ data: createColetaDto});
  }

  findAll() {
    return this.prisma.coleta.findMany({});
  }

  getClient(){
    return this.prisma.cliente.findMany({
      include: {
        coletas: true,
      }
    }
    )
      
  }

  update(id: number, updateColetaDto: UpdateColetaDto) {
    return this.prisma.coleta.update({
      where: { id },
      data: updateColetaDto,
    });
  }
}
