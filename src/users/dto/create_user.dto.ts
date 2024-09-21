import { IsString } from 'class-validator'

export class CreateUsersDTO{


    @IsString()
    readonly nome: string

    
    @IsString()
    readonly email: string

    
    @IsString()
    readonly senha: string


}