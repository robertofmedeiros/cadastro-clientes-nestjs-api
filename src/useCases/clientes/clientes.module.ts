import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Clientes } from 'src/model/clientes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesController } from './clientes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Clientes])],
  providers: [ClientesService],
  controllers: [ClientesController],
  exports: [ClientesService]
})
export class ClientesModule {}
