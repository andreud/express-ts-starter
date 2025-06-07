import User from '../domain/User';
import UserRepository from '../domain/UserRepository';


export default class InMemoryUserRepository implements UserRepository{

    private users: User[] = [];

    create(user: User): void {
        this.users.push(user);
    }

    list(): User[]{
        return this.users;
    }

    /*getById(id: string): Promise<User | null> {
        return this.users.find(u=>{u.id===id});
    }

    update(id: string, user: User): Promise<void> {
        this.users.findIndex(u=>{})

    }  

    delete(id: string): Promise<void> {

    }*/

}