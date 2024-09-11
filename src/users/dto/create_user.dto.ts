import { IsString } from 'class-validator'

export class CreateUsersDTO{


    @IsString()
    readonly nome: String

    
    @IsString()
    readonly email: string

    
    @IsString()
    readonly senha: string


}