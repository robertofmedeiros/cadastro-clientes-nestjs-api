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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
const typeorm_1 = require("typeorm");
let Clientes = class Clientes {
    id;
    nome;
    sobrenome;
    email;
    documento;
};
exports.Clientes = Clientes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Clientes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clientes.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clientes.prototype, "sobrenome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Clientes.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], Clientes.prototype, "documento", void 0);
exports.Clientes = Clientes = __decorate([
    (0, typeorm_1.Entity)()
], Clientes);
//# sourceMappingURL=clientes.entity.js.map