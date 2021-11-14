import { IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'John' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Ode' })
  @IsString()
  lastName: string;
}
