import { PartialType } from '@nestjs/mapped-types'
import { CreateUsersDTO } from './create_user.dto'

export class UpdateUsersDTO extends PartialType(CreateUsersDTO) {

}