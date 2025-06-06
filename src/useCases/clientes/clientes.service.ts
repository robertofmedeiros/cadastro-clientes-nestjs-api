import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clientes } from 'src/model/clientes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
    private readonly logger = new Logger(ClientesService.name, { timestamp: true });

    constructor(
        @InjectRepository(Clientes)
        private readonly clientesRepository: Repository<Clientes>
    ) {}

    async create (cliente: Clientes) {
        this.logger.log(cliente);

        return await this.clientesRepository.save(cliente);
    }

    async update (id: number, cliente: Clientes) {

        const clienteResult = await this.findById(id);
        if(!clienteResult) {
            throw new BadRequestException('Cliente não encontrado');
        }

        cliente.id = id;

        await this.clientesRepository
            .createQueryBuilder()
            .update(Clientes)
            .set(cliente)
            .where("id = :id", { id })
            .execute();
        return await this.findById(id);
    }

    async findAll () {
        const clientesList = await this.clientesRepository.find({
            order: {
                id: 'ASC',
            }
        });

        return clientesList;
    }

    async findById (id: number) {
        const clienteResult = await this.clientesRepository.findOneBy({
            id,
        });

        if(!clienteResult) {
            throw new BadRequestException('Cliente não encontrado');
        }

        return clienteResult;
    }

    async remove (id: number) {
        const clienteResult = await this.findById(id);
        if(!clienteResult) {
            throw new BadRequestException('Cliente não encontrado');
        }

        return await this.clientesRepository.delete(id);
    }
}
