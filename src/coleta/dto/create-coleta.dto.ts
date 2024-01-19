import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateColetaDto {
    @ApiProperty()
    infoColeta: string;

    @ApiProperty()
    @IsNotEmpty()
    clienteId: number = 1;

}
