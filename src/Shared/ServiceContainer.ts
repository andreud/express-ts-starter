import { UserList } from "../User/application/UserList";
import { UserCreate } from "../User/application/UserCreate";
import InMemoryUserRepository from "../User/infrastructure/InMemoryUserRepository";

const userRepository = new InMemoryUserRepository();

export const ServiceContainer = {
    user: {
        list: new UserList(userRepository),
        create: new UserCreate(userRepository)
    }
}