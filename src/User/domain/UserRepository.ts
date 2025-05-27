import User from './User';

export default interface UserRepository {

    create(user: User): void
    
    list(): User[]
    
    /*getById(id: string): Promise<User | null>

    update(id: string, user: User): Promise<void>

    delete(id: string): Promise<void>*/

}