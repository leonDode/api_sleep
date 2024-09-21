import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDTO } from './dto/create_user.dto';
import { UpdateUsersDTO } from './dto/update_users.dto';

@Controller('users')
export class UsersController {


    constructor(private readonly  usersService:UsersService){
    }
    

    @Get()
    findAll(){
        return this.usersService.findAll()

    }


    @Post()
    createDrink(@Body() createUsersDTO:CreateUsersDTO){
        return this.usersService.create(createUsersDTO)

    }


    @Put(':id')
    updateDrinks(@Param('id') id:number, @Body() updateUsersDTO:UpdateUsersDTO){

       return this.usersService.update(id,updateUsersDTO)
    }


}
