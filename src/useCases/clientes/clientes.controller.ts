import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Clientes } from 'src/model/clientes.entity';

@Controller('clientes')
export class ClientesController {
    constructor(
        private readonly clientesService: ClientesService,
    ) { }

    @Get()
    findAll() {
        return this.clientesService.findAll();
    }

    @Get(":id")
    findById(@Param('id') id: number) {
        return this.clientesService.findById(id);
    }

    @Post()
    create(@Body() cliente:Clientes) {
        return this.clientesService.create(cliente);
    }

    @Put(":id")
    update(@Param('id') id: number, @Body() cliente:Clientes) {
        return this.clientesService.update(id, cliente);
    }

    @Delete(":id")
    remove(@Param('id') id: number) {
        return this.clientesService.remove(id);
    }
}
