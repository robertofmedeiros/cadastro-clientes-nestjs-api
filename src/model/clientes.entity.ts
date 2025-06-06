import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clientes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    sobrenome: string;

    @Column()
    email: string;

    @Column({default: null})
    documento?: string;
}