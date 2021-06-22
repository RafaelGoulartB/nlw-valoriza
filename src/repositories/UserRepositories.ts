import { EntityRepository, Repository } from 'typeorm'
import { User } from '../entities/User'

class UsersRepositories extends Repository<User> {

}

export { UsersRepositories }