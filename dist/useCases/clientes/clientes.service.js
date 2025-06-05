"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ClientesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const clientes_entity_1 = require("../../model/clientes.entity");
const typeorm_2 = require("typeorm");
let ClientesService = ClientesService_1 = class ClientesService {
    clientesRepository;
    logger = new common_1.Logger(ClientesService_1.name, { timestamp: true });
    constructor(clientesRepository) {
        this.clientesRepository = clientesRepository;
    }
    async create(cliente) {
        this.logger.log(cliente);
        return this.clientesRepository.save(cliente);
    }
    async update(id, cliente) {
        cliente.id = id;
        const clienteResult = await this.clientesRepository.preload({
            ...cliente,
        });
        if (!clienteResult) {
            throw new common_1.BadRequestException('Cliente não encontrada');
        }
        return this.clientesRepository.save(clienteResult);
    }
    async findAll() {
        const clientesList = await this.clientesRepository.find({
            order: {
                id: 'desc',
            }
        });
        return clientesList;
    }
    async findById(id) {
        const clienteResult = await this.clientesRepository.findOneBy({
            id,
        });
        if (!clienteResult) {
            throw new common_1.BadRequestException('Cliente não encontrado');
        }
        return clienteResult;
    }
    async remove(id) {
        const clienteResult = await this.findById(id);
        if (!clienteResult) {
            throw new common_1.BadRequestException('Cliente não encontrado');
        }
        return this.clientesRepository.delete(id);
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = ClientesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(clientes_entity_1.Clientes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientesService);
//# sourceMappingURL=clientes.service.js.map