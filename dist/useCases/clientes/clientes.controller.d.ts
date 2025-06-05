import { ClientesService } from './clientes.service';
import { Clientes } from 'src/model/clientes.entity';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    findAll(): Promise<Clientes[]>;
    findById(id: number): Promise<Clientes>;
    create(cliente: Clientes): Promise<Clientes>;
    update(id: number, cliente: Clientes): Promise<Clientes>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
