import User from '../domain/User';
import UserRepository from '../domain/UserRepository';

export class UserList {

    constructor(private repository: UserRepository){
        this.repository = repository;
    }

    run(): User[] {
        return [];
        /*return new Promise((res, rej)=>{
            res(this.repository.list())
        })*/
    }

}