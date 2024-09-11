import { Column, PrimaryGeneratedColumn } from "typeorm"


export class Users {

    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    nome: string

    @Column({nullable:true})
    email: string

    @Column({nullable:true})
    senha: string

}