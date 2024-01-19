import { Controller, Get, Post, Body, Patch, Param} from '@nestjs/common';
import { ColetaService } from './coleta.service';
import { CreateColetaDto } from './dto/create-coleta.dto';
import { UpdateColetaDto } from './dto/update-coleta.dto';

@Controller('coleta')
export class ColetaController {
  constructor(private readonly coletaService: ColetaService) {}

  @Post()
  create(@Body() createColetaDto: CreateColetaDto) {
    return this.coletaService.create(createColetaDto);
  }

  @Get()
  findAll() {
    return this.coletaService.findAll();
  }

  @Get('/cliente')
  getClient() {
    return this.coletaService.getClient();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColetaDto: UpdateColetaDto) {
    return this.coletaService.update(+id, updateColetaDto);
  }
}
