import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column } from "typeorm";


@Entity('idea')
export class IdeaEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
    @CreateDateColumn() createdDate: Date;
    @Column('text') idea: string;
    @Column('text') description: string;
}