import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDTO } from './dto/create_user.dto';
import { UpdateUsersDTO } from './dto/update_users.dto';

@Injectable()
export class UsersService {



    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,

    ){}




    async  findAll(){
        return this.usersRepository.find()
        }

    async   findOne(id:number){
            const user =  await this.usersRepository.findOne({
              where: {id},
            })
            if(!user){
              throw new NotFoundException(`o usuario com ID ${id} nao existe`)
            }
            return user
        }

    async  findByName(nome:string){
        const user =  await this.usersRepository.find({
            where: {nome},
        })
            if(!user){
             throw new NotFoundException(`o usuario  ${nome} nao existe`)
            }
           return user
        }

    async create(createUserDTO: CreateUsersDTO) {
        const user = this.usersRepository.create({
             ...createUserDTO
        });
            
         return this.usersRepository.save(user);
        }

    async update(id: number, updateUserDTO: UpdateUsersDTO) {
        const user = await this.usersRepository.preload({
           id, 
           ...updateUserDTO,
        });
          
            // Verifica se o usuário existe
         if (!user) {
            throw new NotFoundException(`o usuario  com ID ${id} não encontrado`);
         }
          
            // Salva o usuário atualizado
            return this.usersRepository.save(user);
          }
        }