import User from '../domain/User';
import UserRepository from '../domain/UserRepository';

export class UserList {

    constructor(private repository: UserRepository){
        this.repository = repository;
    }

    async run(): Promise<User[]> {
        return new Promise((resolve, reject)=>{
            resolve(this.repository.list());
            //resolve([])
        });
    }

}