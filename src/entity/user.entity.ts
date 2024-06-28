import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    firstName: string = '';

    @Column()
    lastName: string = '';
    // constructor(body: any) {}
}
