import { Clientes } from 'src/model/clientes.entity';
import { Repository } from 'typeorm';
export declare class ClientesService {
    private readonly clientesRepository;
    private readonly logger;
    constructor(clientesRepository: Repository<Clientes>);
    create(cliente: Clientes): Promise<Clientes>;
    update(id: number, cliente: Clientes): Promise<Clientes>;
    findAll(): Promise<Clientes[]>;
    findById(id: number): Promise<Clientes>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
