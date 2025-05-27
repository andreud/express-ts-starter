import User from "../domain/User";
import UserRepository from "../domain/UserRepository";

export class UserCreate {

    constructor(private repository: UserRepository){
        this.repository = repository;
    }

    async run(user: User) {
        this.repository.create(user);
    }

}