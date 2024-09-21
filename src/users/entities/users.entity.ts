import { Column, PrimaryGeneratedColumn,Entity } from "typeorm"

@Entity('users')
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