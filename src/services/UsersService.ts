import {getCustomRepository} from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
   // VERIFICAR SE O USUÁRIO EXISTE, SE EXISTIR SALVAR NO BANCO DE DADOS, SE EXISTIR RETORNAR O USUÁRIO
  async create(email: string){
    const usersRepository = getCustomRepository(UsersRepository)

    const userExists = await usersRepository.findOne({
      email
    })
    if(userExists){
      return userExists
    }
    const user = usersRepository.create({
      email
    })

    await usersRepository.save(user)

    return user
  }

}
export {UsersService}